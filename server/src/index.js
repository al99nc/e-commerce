import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
import bcrypt from "bcrypt";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//slugggg generater
const generateUserSlug = (name) => {
  //from the internet
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove weird characters (like #$%!@)
    .replace(/\s+/g, "-"); // replace spaces with dashes
};

app.get("/", (req, res) => {
  //so when the user go the home page his roll will be a buyer and not a seller so we'll just display the products for now
  res.redirect("/products");
});

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  //really simple clean work
  console.log(req.params.id);
  const id = parseInt(req.params.id, 10);
  const findProduct = products.find((product) => product.id === id);
  if (findProduct) {
    //handeling
    res.json(findProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Signup Endpoint
app.post("/signup", async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;

    // Check if user exists
    const existingUser = await prisma.users.findFirst({
      where: { OR: [{ email }, { phone }] },
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const slug = generateUserSlug(name);

    const newUser = await prisma.users.create({
      data: {
        slug,
        email,
        phone,
        name,
        password: hashedPassword,
        role: "CUSTOMER",
        locale: "en",
        avatar: "",
      },
    });

    const token = jwt.sign(
      //this is form the internet
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
      token,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});
// Login Endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Compare passwords
  const passwordValid = await bcrypt.compare(password, user.password);
  console.log("Password valid:", passwordValid); //
  if (passwordValid) {
    const token = jwt.sign(
      //this is form the internet
      { user: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.json({
      message: "Login successful",
      userId: user.id,
      token: token, // send the token back
      user: { id: user.id, email: user.email, name: user.name }, // send user data
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});


app.listen(PORT, () => {
  console.log(` Backend running on http://localhost:${PORT}`);
});
