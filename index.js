const express = require('express');
const mongoose = require('mongoose');

const app = express();
const path = require('path');

// models
const Product = require('./models/product');

// importing mongoose and linking it to database
// mongoose error handler
async function main() {
    await mongoose.connect('mongodb://localhost:27017/farmStand');
    console.log('CONNECTION SUCCESSFUL!');
}
main().catch((err) => console.log('Oh no something wrong!', err));

// engine to render
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.send('ALL PRODUCTS WILL BE HERE!');
});

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!');
});
