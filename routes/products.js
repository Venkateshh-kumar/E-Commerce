// const express = require('express');
// const Product = require('../models/Product');

// const router = express.Router();

// // Create a new product
// router.post('/product', async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         await product.save();
//         res.status(201).json(product);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Retrieve a list of all products
// router.get('/product', async (req, res) => {
//     try {
//         console.log("done!")
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Retrieve details of a single product
// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ error: 'Product not found' });
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Update an existing product
// router.put('/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!product) return res.status(404).json({ error: 'Product not found' });
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Delete a product
// router.delete('/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);
//         if (!product) return res.status(404).json({ error: 'Product not found' });
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');

// // Create a new product
// router.post('/', async (req, res) => {
//     try {
//         const { name, description, price, category } = req.body;

//         const newProduct = new Product({
//             name,
//             description,
//             price,
//             category
//         });

//         const savedProduct = await newProduct.save();
//         res.status(201).json(savedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Retrieve a list of all products
// router.get('/data', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// // Other CRUD operations here...

// module.exports = router;


//--------------------------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/', async (req, res) => {
    try {
        const { name, description, price, category } = req.body;

        const newProduct = new Product({
            name,
            description,
            price,
            category
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Retrieve a list of all products
router.get('/data', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Retrieve details of a single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing product
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;


