/* eslint-disable indent */
'use strict';

const express = require('express');
const { ClothesModel } = require('../models');

const router = express.Router();

router.post('/food', async (req, res, send) => {
  console.log('req body', req.body);

  const newClothes = await ClothesModel.create(req.body);
  res.status(200).send(newClothes);
});

router.get('/food', async (req, res, send) => {
  console.log('req', req.get);
});

module.exports = router;
