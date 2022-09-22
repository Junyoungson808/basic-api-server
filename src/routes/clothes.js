/* eslint-disable indent */
'use strict';

const express = require('express');
const { ClothesModel } = require('../models/clothes.schema');

const router = express.Router();

router.post('/clothes', async (req, res, send) => {
  console.log('req body', req.body);

  const newClothes = await ClothesModel.create(req.body);
  res.status(200).send(newClothes);
});

router.get('/clothes', async (req, res, send) => {
  console.log('req', req.get);
});

module.exports = router;
