import express from 'express';
import Product from '../model/productModel.js';

const router = express.Router();

router.get('/products/1', async (req, res) => {
  const products = await Product.find({ id: { $gte: 1, $lte: 20 } });
  res.json(products);
});

router.get('/products/2', async (req, res) => {
  const products = await Product.find({ id: { $gte: 318 } });
  res.json(products);
});

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