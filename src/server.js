'use strict';

const express = require('express');
const { sequelizeDatabase, FoodModel, ClothesModel } = require('./models');

const PORT = process.env.PORT || 3002;

const app = express();

app.get('/food', (req, res, next) => {
    console.log('req', )
})

app.post('/food', (req, res, send) => {
  console.log('req body', req.body);
  const newFood = FoodModel.create(req.body);
  res.status(200).send(newFood);
});

app.post('/clothes', (req, res, send) => {
  console.log('req body', req.body);
  const newClothes = ClothesModel.create(req.body);
  res.status(200).send(newClothes);
});

function start() {
  app.listen(PORT, () => console.log('listening on port'));
}

module.exports = { app, start };
