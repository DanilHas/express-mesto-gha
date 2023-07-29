const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
require('dotenv').config();

const { PORT, MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL);

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '64c13f344ebc093e2d134dc2',
  };

  next();
});

app.use(router);

app.listen(PORT);
