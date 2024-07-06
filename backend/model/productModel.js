import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number
  }
}, { strict: false });

const Product = mongoose.model('Product', productSchema);

export default Product;