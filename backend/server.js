const express = require('express');
const app = express();
const products = require('./routes/products')

// app.get('/', (req, res) => {
//     res.send('Welcome to the Backend')
// })

// Body parser
app.use(express.json());

app.use('/api/products', products)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listneing on port ${PORT}`);
})
