const http = require('http');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./controllers/productController');

// Create Server
const server = http.createServer((req, res) => {
    // Simple Routing
    // Get all products
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    // Get product by id
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
    // Create a new product
    } else if (req.url === '/api/products' && req.method === 'POST') {
        createProduct(req, res)
    // Update product
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT') {
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    // Delete product
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE') {
        const id = req.url.split('/')[3]
        deleteProduct(req, res, id)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Oops, Route not found!' }))
    }

    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Hello Jatibening!</h1>')
    // res.end()
});

// Define PORT
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));