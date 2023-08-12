require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const { PORT = 3000, MONGO_DB = 'mongodb://localhost:27017/mestodb' } =
  process.env;

mongoose.connect(MONGO_DB);

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
