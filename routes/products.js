const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsControllers');

// Create a new product
router.post('/add', productController.createProduct);

// Get a specific product by ID
router.get('/find/:id', productController.getProduct);

// Update a product by ID
router.put('/update/:id', productController.updateProduct);

// Search product 
router.get('/search/:attribute', productController.searchProduct);

// Delete a product by ID
router.delete('/delete/:id', productController.deleteProduct);

// Get all products
router.get('/getall', productController.getAllProducts);

module.exports = router;
