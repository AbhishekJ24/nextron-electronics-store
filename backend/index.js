import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import apiRoutes from './routes/api.js';

const app = express();
app.use(cors());
app.set('view engine', 'ejs');

await mongoose.connect('mongodb://localhost:27017/nextron-electronics-store')

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.render('home.ejs',{});
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});