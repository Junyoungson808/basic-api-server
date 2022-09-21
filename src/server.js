'use strict';

const express = require('express');
const { sequelizeDatabase, PeopleModel } = require('./models');

const PORT = process.env.PORT || 3002;

const app = express();

app.post('/people', (req, res, send) => {
  console.log('req body', req.body);

  const newPerson = PeopleModel.create(req.body);
  res.status(200).send(newPerson);
});

function start(){
  app.listen(PORT, () => console.log('listening on port'));
}

module.exports = { app, start };
