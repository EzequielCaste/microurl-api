const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const urlRouter = require('./routes/url.routes');
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/db';

const db = mongoose.connect(DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).
then( res => res)
.catch( err => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('client'));
app.use('/url', urlRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

