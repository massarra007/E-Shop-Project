const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json("Product not found");
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json("Product not found");
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json("Product not found");
      }
      res.status(200).json("Product deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  searchProduct: async (req, res) => {
    const attribute = req.params.attribute;
    const query = req.query.q;
    try {
      // Ensure the provided attribute is valid (e.g., productLocation, title)
      const validAttributes = ["product_location", "title", "supplier"];
      if (!validAttributes.includes(attribute)) {
        return res.status(400).json("Invalid attribute provided");
      }

      const filter = {
        [attribute]: { $regex: new RegExp(query, "i") }, // Case-insensitive search
      };

      const result = await Product.find(filter);

      if (result.length > 0) {
        return res.status(200).json(result);
      } else {
        return res.status(404).json("Product not found");
      }
    } catch (error) {
      console.error("Error searching for products:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};
