const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('./routes');

const { PORT = 3000, MongoURL = 'mongodb://localhost:27017/mestodb' } = process.env;

mongoose.connect(MongoURL);

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '64c64f2e97c0840704c41a4a',
  };

  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
