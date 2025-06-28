import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//fake db for now ...
const products = [
  {
    id: 1,
    title: "Keyboard",
    price: 99,
    description: "it's a keyboard",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price: 49,
    description: "it's a gaming mouse",
    img: "https://picsum.photos/200/300",
  },
];
app.get("/", (req, res) => {
  //so when the user go the home page his roll will be a buyer and not a seller so we'll just display the products for now
  res.json(products);
});

app.get("/api/products", (req, res) => {
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

app.listen(PORT, () => {
  console.log(` Backend running on http://localhost:${PORT}`);
});
