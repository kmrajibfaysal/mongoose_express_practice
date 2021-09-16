const mongoose = require('mongoose');
const Product = require('./models/product');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/farmStand');
    console.log('CONNECTION SUCCESSFUL!');
}
main().catch((err) => console.log('Oh no something wrong!', err));

// const a = new Product({
//     name: 'Ruby grape fruits',
//     price: 1.99,
//     category: 'fruit',
// });

// a.save()
//     .catch((err) => {
//         console.log(err);
//     })

//     .then((p) => {
//         console.log(p);
//     });
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.0,
        category: 'vegetable',
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit',
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit',
    },
    {
        name: 'Organic Celery',
        price: 1.5,
        category: 'vegetable',
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy',
    },
];

Product.insertMany(seedProducts)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
