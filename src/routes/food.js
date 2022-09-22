'use strict';

const express = require('express');
const { FoodModel } = require('../models/food.schema');

const router = express.Router();

router.post('/food', async (req, res, send) => {
  console.log('req body', req.body);

  const newFood = await FoodModel.create(req.body);
  res.status(200).send(newFood);
});



module.exports = router;
