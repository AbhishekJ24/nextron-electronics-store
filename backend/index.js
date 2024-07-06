// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.set('views', 'backend/views/');
app.set('view engine', 'ejs');

const MONGODB_URI = 'mongodb://localhost:27017/nextron-electronics-store'; // Update with your MongoDB URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
