'use strict';

const express = require('express');
const peopleRouter = require('./routes/people');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(logger);
app.use(express.json());
app.use(peopleRouter);
app.use(foodRouter);
app.use(clothesRouter);


function start() {
  app.listen(PORT, () => console.log('listening on port'));
}

module.exports = { app, start };
