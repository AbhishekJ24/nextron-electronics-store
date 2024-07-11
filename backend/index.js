import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import * as path from 'path';
import apiRoutes from './routes/api.js';

const app = express();
app.use(cors());

app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'));
app.set('view engine', 'ejs');

const uri = "mongodb+srv://abhishekj24:root12340000@nextron-electronics-sto.583vbys.mongodb.net/?retryWrites=true&w=majority&appName=Nextron-Electronics-Store/test"

await mongoose.connect(uri)

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});