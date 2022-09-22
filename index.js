'use strict';

// requires from the model/index.js file
const { sequelizeDatabase, PeopleModel, FoodModel, ClothesModel } = require('./src/models');
const { start } = require('./src/server');

//create all associated tables and make sure connection is good
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
  })
  .catch(err => console.error(err));

start();
