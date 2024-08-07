import express from 'express';
import Product from '../model/productModel.js';
import Contact from '../model/contactModel.js';

const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;
    const query = {};
    if (req.query.minId && req.query.maxId) {
      query.id = { $gte: parseInt(req.query.minId), $lte: parseInt(req.query.maxId) };
    }
    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);
    const products = await Product.find(query).skip(skip).limit(limit);
    res.json({ products, totalPages });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/contactUs', async (req, res) => {
  try {
    const { name, subject, email, message } = req.body
    const userQuery = new Contact({
      name,
      subject,
      email,
      message
    })
    await userQuery.save();
    res.status(201).json(userQuery);
  } catch (err) {
    res.status(500).json({ error: 'Error posting data to on server side' });
  }
})

router.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      "username": "scarlett_johansson",
      "password": "blackwidow27",
      "gender": "female",
      "address": "123 Marvel Ave, Los Angeles"
    },
    {
      "username": "jennifer_lawrence",
      "password": "mystique2023",
      "gender": "female",
      "address": "456 X-Men Blvd, Hollywood"
    },
    {
      "username": "margot_robbie",
      "password": "harleyquinn87",
      "gender": "female",
      "address": "789 Gotham St, Malibu"
    },
    {
      "username": "emma_stone",
      "password": "oscarwinner",
      "gender": "female",
      "address": "101 Academy Rd, Beverly Hills"
    },
    {
      "username": "leonardo_dicaprio",
      "password": "inception10",
      "gender": "male",
      "address": "222 Dream Ave, Hollywood"
    },
    {
      "username": "brad_pitt",
      "password": "fightclub99",
      "gender": "male",
      "address": "333 Angelina Ln, Santa Monica"
    },
    {
      "username": "gal_gadot",
      "password": "wonderwoman84",
      "gender": "female",
      "address": "444 Themyscira Dr, Pacific Palisades"
    },
    {
      "username": "robert_downey_jr",
      "password": "ironman08",
      "gender": "male",
      "address": "555 Stark Tower, Malibu"
    },
    {
      "username": "meryl_streep",
      "password": "queenofcinema",
      "gender": "female",
      "address": "666 Oscar Ln, Beverly Hills"
    },
    {
      "username": "angelina_jolie",
      "password": "tombraider01",
      "gender": "female",
      "address": "777 Raider Rd, Westwood"
    }
  ]);
});


export default router;