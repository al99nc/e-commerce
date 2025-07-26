import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";

const prisma = new PrismaClient();
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Setup multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

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

app.get("/products/:id", async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    console.log(product);
    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
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
        )}`, // 🔥 FREE avatar the avatar shit is ai because its a bitch
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
  try {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare passwords
    const passwordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", passwordValid);

    if (passwordValid) {
      const token = jwt.sign(
        { userId: user.id, email: user.email, role: user.role }, // Fixed: was using newUser instead of user
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.status(200).json({
        success: true,
        user: {
          id: user.id, // Fixed: was using newUser instead of user
          email: user.email,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
        },
        token,
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Middleware to verify JWT token
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
      { expiresIn: "100h" }
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
      take: 10, // just latest 10 for example
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

app.post(
  "/add-product",
  verifyToken,
  requireSeller,
  upload.single("picture"),
  async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).json({
          error:
            "Request body is missing. Make sure you're sending form data properly.",
        });
      }

      const {
        title,
        summary,
        description,
        price,
        discount_type,
        discount_value,
        tags,
        stock_quantity,
      } = req.body;

      if (!title || !description || !price || !stock_quantity) {
        return res.status(400).json({
          error:
            "Missing required fields: title, description, price, and stock_quantity are required.",
        });
      }

      const picture = req.file ? `/uploads/${req.file.filename}` : "";

      // Parse numeric fields
      const parsedPrice = parseFloat(price);
      const parsedDiscountValue = discount_value
        ? parseFloat(discount_value)
        : 0;
      const parsedStockQuantity = parseInt(stock_quantity);

      if (isNaN(parsedPrice) || parsedPrice <= 0) {
        return res.status(400).json({ error: "Invalid price value" });
      }

      if (isNaN(parsedStockQuantity) || parsedStockQuantity < 0) {
        return res.status(400).json({ error: "Invalid stock quantity" });
      }

      // Get or create default category
      let defaultCategory = await prisma.category.findFirst({
        where: { slug: "uncategorized" },
      });

      if (!defaultCategory) {
        defaultCategory = await prisma.category.create({
          data: {
            slug: "uncategorized",
            name: "Uncategorized",
            description: "Default category for uncategorized products",
            tags: ["default"],
          },
        });
      }

      const newProduct = await prisma.product.create({
        data: {
          seller_id: req.user.userId,
          category_id: defaultCategory.id, // Use default category
          title,
          summary: summary || "",
          description,
          price: parsedPrice,
          discount_type: discount_type || "none",
          discount_value: parsedDiscountValue,
          tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
          stock_quantity: parsedStockQuantity,
          picture,
        },
      });

      res.status(200).json({ success: true, product: newProduct });
    } catch (error) {
      console.error("Add product error:", error);

      if (error.code === "P2002") {
        return res
          .status(409)
          .json({ error: "Product with this title already exists" });
      }

      if (error.code === "P2003") {
        return res
          .status(400)
          .json({ error: "Invalid category_id or seller_id" });
      }

      res
        .status(500)
        .json({ error: "Something went wrong while creating the product" });
    }
  }
);
app.patch(
  "/edit-product/:id",
  verifyToken,
  requireSeller,
  upload.single("picture"),
  async (req, res) => {
    try {
      const product_id = req.params.id;

      if (!req.body) {
        return res.status(400).json({
          error:
            "Request body is missing. Make sure you're sending form data properly.",
        });
      }

      const {
        title,
        summary,
        description,
        price,
        discount_type,
        discount_value,
        tags,
        stock_quantity,
      } = req.body;

      if (!title || !description || !price || !stock_quantity) {
        return res.status(400).json({
          error:
            "Missing required fields: title, description, price, and stock_quantity are required.",
        });
      }

      // Check if the product exists and belongs to the seller
      const existingProduct = await prisma.product.findFirst({
        where: {
          id: product_id,
          seller_id: req.user.userId,
        },
      });

      if (!existingProduct) {
        return res.status(404).json({
          error: "Product not found or you don't have permission to edit it.",
        });
      }

      // Parse numeric fields
      const parsedPrice = parseFloat(price);
      const parsedDiscountValue = discount_value
        ? parseFloat(discount_value)
        : 0;
      const parsedStockQuantity = parseInt(stock_quantity);

      if (isNaN(parsedPrice) || parsedPrice <= 0) {
        return res.status(400).json({ error: "Invalid price value" });
      }
      if (isNaN(parsedStockQuantity) || parsedStockQuantity < 0) {
        return res.status(400).json({ error: "Invalid stock quantity" });
      }

      // Only update picture if a new file was uploaded
      const updateData = {
        title,
        summary: summary || "",
        description,
        price: parsedPrice,
        discount_type: discount_type || "none",
        discount_value: parsedDiscountValue,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        stock_quantity: parsedStockQuantity,
      };

      // Add picture to update data only if a new file was uploaded
      if (req.file) {
        updateData.picture = `/uploads/${req.file.filename}`;
      }

      const updatedProduct = await prisma.product.update({
        where: { id: product_id },
        data: updateData,
      });

      res.status(200).json({ success: true, product: updatedProduct });
    } catch (error) {
      console.error("Edit product error:", error);
      if (error.code === "P2002") {
        return res
          .status(409)
          .json({ error: "Product with this title already exists" });
      }
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Product not found" });
      }
      res
        .status(500)
        .json({ error: "Something went wrong while updating the product" });
    }
  }
);
app.delete(
  "/delete-product/:id",
  verifyToken,
  requireSeller,
  async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.product.delete({
        where: { id },
      });
      res.status(200).json({ message: "Product deleted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete product" });
    }
  }
);

// FIXED VERSION:
const getOptionalUser = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
    } else {
      req.user = null;
    }
  } catch {
    req.user = null;
  }
  next();
};
app.post(
  "/add-to-cart/:id", // id = product_id
  getOptionalUser,
  async (req, res) => {
    // TO:
    const user_id = req.user?.userId;
    const product_id = req.params.id;
    const { quantity = 1 } = req.body; // Default to 1 if not provided

    try {
      // Input validation
      if (!user_id) {
        return res.status(400).json({
          success: false,
          error: "Missing required id ddd",
        });
      }
      if (!product_id) {
        return res.status(400).json({
          success: false,
          error: "Missing required parameters",
        });
      }
      if (quantity < 1 || quantity > 100) {
        return res.status(400).json({
          success: false,
          error: "Quantity must be between 1 and 100",
        });
      }

      // Check if product exists and get its current price and stock
      const product = await prisma.product.findUnique({
        where: { id: product_id },
        select: {
          id: true,
          price: true,
          stock_quantity: true,
          title: true,
          discount_type: true,
          discount_value: true,
        },
      });

      if (!product) {
        return res.status(404).json({
          success: false,
          error: "Product not found",
        });
      }

      // Check stock availability
      if (product.stock_quantity < quantity) {
        return res.status(400).json({
          success: false,
          error: `Insufficient stock. Only ${product.stock_quantity} items available`,
        });
      }

      // Calculate the actual price (including discounts)
      let actualPrice = product.price;
      if (product.discount_type === "percent" && product.discount_value > 0) {
        actualPrice = product.price * (1 - product.discount_value / 100);
      } else if (
        product.discount_type === "amount" &&
        product.discount_value > 0
      ) {
        actualPrice = product.price - product.discount_value;
      }

      // Find or create active cart for user
      let cart = await prisma.cart.findFirst({
        where: {
          created_by: user_id,
          status: "ACTIVE",
        },
        include: {
          items: {
            where: {
              product_id: product_id,
            },
          },
        },
      });

      // If no active cart exists, create one
      if (!cart) {
        cart = await prisma.cart.create({
          data: {
            created_by: user_id,
            status: "ACTIVE",
          },
          include: {
            items: [],
          },
        });
      }

      // Check if product already exists in cart
      const existingItem = cart.items[0]; // We filtered by product_id above

      let cartItem;
      let message;

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity; //this is some good shit

        // Check if new quantity exceeds stock
        if (newQuantity > product.stock_quantity) {
          return res.status(400).json({
            success: false,
            error: `Cannot add ${quantity} items. Maximum available: ${product.stock_quantity - existingItem.quantity}`,
          });
        }

        // Update existing cart item
        cartItem = await prisma.cartItem.update({
          where: { id: existingItem.id },
          data: {
            quantity: newQuantity,
            price: actualPrice, // Update price in case it changed omg
          },
          include: {
            product: {
              select: {
                id: true,
                title: true,
                picture: true,
                stock_quantity: true,
              },
            },
          },
        });

        message = `Cart updated! Quantity increased to ${newQuantity}`;
      } else {
        // Create new cart item
        cartItem = await prisma.cartItem.create({
          data: {
            cart_id: cart.id,
            product_id: product_id,
            quantity: quantity,
            price: actualPrice,
          },
          include: {
            product: {
              select: {
                id: true,
                title: true,
                picture: true,
                stock_quantity: true,
              },
            },
          },
        });

        message = "Product added to cart successfully";
      }

      // Get updated cart summary
      const cartSummary = await prisma.cart.findUnique({
        where: { id: cart.id },
        include: {
          items: {
            include: {
              product: {
                select: {
                  title: true,
                  picture: true,
                },
              },
            },
          },
          _count: {
            select: { items: true },
          },
        },
      });

      // Calculate cart totals
      const totalItems = cartSummary.items.reduce(
        // reunderstane this shirtititit
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = cartSummary.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return res.status(existingItem ? 200 : 201).json({
        success: true,
        message,
        data: {
          cartItem,
          cartSummary: {
            id: cart.id,
            totalItems,
            totalPrice: parseFloat(totalPrice.toFixed(2)),
            itemCount: cartSummary._count.items,
          },
        },
      });
    } catch (err) {
      console.error("Error adding to cart:", err);

      // Handle specific Prisma errors
      if (err.code === "P2002") {
        return res.status(409).json({
          success: false,
          error: "Duplicate cart item",
        });
      }

      if (err.code === "P2025") {
        return res.status(404).json({
          success: false,
          error: "Product or cart not found",
        });
      }

      return res.status(500).json({
        success: false,
        error: "Failed to add product to cart",
      });
    }
  }
);

// GET /cart
app.get("/cart", getOptionalUser, async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    if (!user || !user.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Step 1: Find the user's cart
    const cart = await prisma.cart.findFirst({
      where: {
        created_by: user.userId,
      },
    });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Step 2: Get the cart items + product info
    const cartItems = await prisma.cartItem.findMany({
      //this is the most imp. thing
      where: {
        cart_id: cart.id,
      },
      include: {
        product: true, // Include full product info
      },
    });
    console.log(cartItems);
    return res.json({ items: cartItems });
  } catch (err) {
    console.error("Error fetching cart items:", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
});

app.delete("/cart-item/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    await prisma.cartItem.delete({
      where: { id: itemId },
    });
    res.json({ message: "Item deleted!" });
  } catch (err) {
    res.status(500).json({ error: "Couldn't delete item" });
  }
});

app.post("/checkout", getOptionalUser, async (req, res) => {
  const { cartItems } = req.body;
  const userId = req.user?.userId;

  if (!userId) {
    return res.status(401).json({
      message: "User must be logged in to checkout",
    });
  }

  if (!cartItems || !Array.isArray(cartItems)) {
    return res.status(400).json({ message: "Invalid cart items data." });
  }

  if (cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty." });
  }

  try {
    // 1. Find the user's active cart
    const activeCart = await prisma.cart.findFirst({
      where: {
        created_by: userId,
        status: "ACTIVE",
      },
      include: {
        items: true,
      },
    });

    if (!activeCart) {
      return res.status(404).json({ message: "No active cart found." });
    }

    // 2. Create the order
    const order = await prisma.order.create({
      data: {
        user: { connect: { id: userId } },
      },
    });

    // 3. Create order lines
    const orderLines = await Promise.all(
      cartItems.map((item) =>
        prisma.orderLine.create({
          data: {
            order_id: order.id,
            product_id: item.id,
            price: item.price,
            quantity: item.quantity,
          },
        })
      )
    );

    // 4. Delete all cart items
    await prisma.cartItem.deleteMany({
      where: {
        cart_id: activeCart.id,
      },
    });

    // 5. Update cart status to ORDERED
    await prisma.cart.update({
      where: {
        id: activeCart.id,
      },
      data: {
        status: "ORDERED",
        updated_at: new Date(),
      },
    });

    res.status(201).json({
      message: "Order created successfully",
      order,
      orderLines,
    });
  } catch (err) {
    console.error("Checkout error:", err);
    res.status(500).json({
      message: "Something went wrong during checkout.",
      error: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
