const axios = require('axios');
const mongoose = require('mongoose');
const Product = require('./model/productModel');

const MONGODB_URI = 'mongodb://localhost:27017/nextron-electronics-store';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const fetchAndSaveProducts = async () => {
  try {
    const [fakestoreResponse, escuelaResponse] = await Promise.all([
      axios.get('https://fakestoreapi.com/products'),
      axios.get('https://api.escuelajs.co/api/v1/products')
    ]);

    const fakestoreProducts = fakestoreResponse.data;
    const escuelaProducts = escuelaResponse.data;

    const formattedEscuelaProducts = escuelaProducts.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category?.name,
      image: product.images?.[0],
      rating: {
        rate: product.rating?.rate || 0,
        count: product.rating?.count || 0
      }
    }));

    const allProducts = [...fakestoreProducts, ...formattedEscuelaProducts];

    await Product.deleteMany();

    await Product.insertMany(allProducts);
    console.log('Products saved to MongoDB');
  } catch (error) {
    console.error('Error fetching or saving products:', error);
  } finally {
    mongoose.connection.close();
  }
};

fetchAndSaveProducts();
