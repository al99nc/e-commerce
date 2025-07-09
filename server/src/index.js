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
        avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
          name
        )}`, // 🔥 FREE avatar
      },
    });
    const token = jwt.sign(
      //this is form the internet
      { userId: newUser.id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
        avatar: newUser.avatar, // 🟢 send it if it's needed
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
    res.status(200).json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
        avatar: newUser.avatar, // 🟢 send it if it's needed
      },
      token,
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

// Middleware to verify JWT token (add this if you don't have it)
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add user info to request, if its valed it decodes the users info
    next(); //to noootttt sttoppp
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// PATCH route to upgrade user to seller AND create seller profile
app.patch("/become-seller", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId; // Get from verified token
    const {
      business_name,
      business_type,
      tax_id,
      business_address,
      business_phone,
      business_email,
    } = req.body;

    // Validate required fields
    if (!business_name) {
      return res.status(400).json({ error: "Business name is required" });
    }

    // Check if user exists and is currently a customer
    const existingUser = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (existingUser.role !== "CUSTOMER") {
      return res.status(400).json({
        error: "User is already a seller or has invalid role",
      });
    }

    // Check if seller profile already exists
    const existingProfile = await prisma.sellerProfile.findUnique({
      where: { user_id: userId },
    });

    if (existingProfile) {
      return res.status(400).json({ error: "Seller profile already exists" });
    }

    // Use Prisma transaction to do both operations atomically
    const result = await prisma.$transaction(async (prisma) => {
      // 1. Update user role to SELLER
      const updatedUser = await prisma.users.update({
        where: { id: userId },
        data: {
          role: "SELLER",
        },
      });

      // 2. Create seller profile
      const newSellerProfile = await prisma.sellerProfile.create({
        data: {
          user_id: userId,
          business_name,
          business_type,
          tax_id,
          business_address,
          business_phone,
          business_email,
          commission_rate: 0.05, // 5% default
          status: "PENDING", // Needs approval
          total_sales: 0,
          total_orders: 0,
          rating_count: 0,
        },
      });

      return { updatedUser, newSellerProfile };
    });

    // Generate new token with updated role
    const newToken = jwt.sign(
      {
        userId: result.updatedUser.id,
        email: result.updatedUser.email,
        role: result.updatedUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      success: true,
      message:
        "Successfully applied to become a seller! Your application is pending approval.",
      user: {
        //this user will be send to forntend to give new info abt the user
        id: result.updatedUser.id,
        email: result.updatedUser.email,
        name: result.updatedUser.name,
        role: result.updatedUser.role,
        avatar: result.updatedUser.avatar,
      },
      sellerProfile: {
        //this for the forntend to use the new "sellerprofile" info to make some goodes
        id: result.newSellerProfile.id,
        business_name: result.newSellerProfile.business_name,
        status: result.newSellerProfile.status,
        commission_rate: result.newSellerProfile.commission_rate,
      },
      token: newToken, //changing the token so the brawser know that the user is a seller now
    });
  } catch (error) {
    console.error("Become seller error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});
//middleware to check if the user is a seller role...
const requireSeller = (req, res, next) => {
  if (req.user.role !== "SELLER") {
    return res.status(403).json({ error: "Seller access required" });
  }
  next();
};

// ============= SELLER DASHBOARD ROUTES =============

// GET: Seller Dashboard Overview
app.get("/seller-dashboard", verifyToken, requireSeller, async (req, res) => {
  try {
    const sellerId = req.user.userId;

    // Get seller profile with stats
    const sellerProfile = await prisma.sellerProfile.findUnique({
      where: { user_id: sellerId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
      },
    });

    if (!sellerProfile) {
      return res.status(404).json({ error: "Seller profile not found" });
    }

    // plus thing to see the totle sellers products
    const productCount = await prisma.product.count({
      where: { seller_id: sellerId },
    });
    const products = await prisma.product.findMany({
      where: { seller_id: sellerId },
      orderBy: { created_at: "desc" },
      take: 10, // just latest 5 for example
    });

    // Get recent orders
    const recentOrders = await prisma.orderLine.findMany({
      where: {
        product: {
          seller_id: sellerId,
        },
      },
      include: {
        product: {
          select: {
            title: true,
            picture: true,
          },
        },
        order: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: {
        order: {
          created_at: "desc",
        },
      },
      take: 5,
    });

    const dashboardData = {
      seller: sellerProfile,
      stats: {
        totalProducts: productCount,
        totalSales: sellerProfile.total_sales,
        totalOrders: sellerProfile.total_orders,
        rating: sellerProfile.rating,
        ratingCount: sellerProfile.rating_count,
      },
      recentOrders,
      products,
    };

    res.json({ success: true, data: dashboardData });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});
// ✅ BACKEND - /routes/products.js or similar

// Middleware
// const multer = require("multer");
import path from "path";
 const router = express.Router();

// // Setup multer for image upload
// const storage = multer.diskStorage({
//   //work on dat
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });
export default router;


// POST: Add Product
router.post("/add-product",verifyToken,requireSeller,   async (req, res) => {
    try {
      const {
        title,
        summary,
        description,
        price,
        category_id,
        discount_type,
        discount_value,
        tags,
        stock_quantity,
      } = req.body;

      const picture = req.file ? `/uploads/${req.file.filename}` : "";

      const newProduct = await prisma.product.create({
        data: {
          seller_id: req.user.userId,
          category_id,
          title,
          summary,
          description,
          price: parseFloat(price),
          discount_type,
          discount_value: parseFloat(discount_value),
          tags: tags.split(","),
          stock_quantity: parseInt(stock_quantity),
          picture,
        },
      });

      res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
      console.error("Add product error:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
);




// ✅ FRONTEND - AddProductPage.jsx

//in the chat
// GET route to fetch seller profile info

app.listen(PORT, () => {
  console.log(` Backend running on http://localhost:${PORT}`);
});
