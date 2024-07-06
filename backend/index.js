import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import * as path from 'path';
import apiRoutes from './routes/api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

await mongoose.connect('mongodb://localhost:27017/nextron-electronics-store')

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
