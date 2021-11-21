const data = require('../data');

const products = data;

// Get all the products
const getProducts = (req, res) => {
    res.status(200).json(products)
}

// Get one product
const getOneProduct = (req, res, next) => {
    const id = req.params.id;
    const product = products.find(product => product.id === parseInt(id));
    if (!product) {
        res.status(404).json({ message: 'Product not found' })
    }
    res.status(200).json(product)
}

// Add a product
const addProduct = (req, res) => {
    const { name, price, description } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        description
    }
    if (!name || !price || !description) {
        res.status(400).json({ message: 'Please provide all the details' })
    }
    else if (products.find(p => p.name === name)) {
        res.status(400).json({ message: 'Product already exists' })
    } else {
        products.push(newProduct);
        res.status(201).json(newProduct)
    }

}

// Update a product
const updateProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
        res.status(404).json({ message: 'Product not found' })
    }
    const body = req.body;
    const updatedProduct = {
        ...product, ...body
    }
    console.log(updatedProduct)
    products.splice(products.indexOf(product), 1, updatedProduct);

    res.status(200).json(updatedProduct)

}

// Delete a product
const deleteProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === parseInt(id));
    if (!product) {
        res.status(404).json({ message: 'Product not found' })
    }
    products.splice(products.indexOf(product), 1);
    res.status(200).json({ message: 'Product deleted' })
}


module.exports = { getProducts, getOneProduct, addProduct, updateProduct, deleteProduct };
