/* eslint-disable indent */
'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/models');
const { DESCRIBE } = require('sequelize/types/query-types');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

DESCRIBE('Testing REST API', () => {

  test('Create a person', async() => {
    let response = await (await request.post('/people')).setEncoding({
      name: 'tester',
      age: 99,
      pronouns: 'they/them',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(99);
    expect(response.body.pronouns).toEqual('they/them');

    test('Should read from people', () => {
      expect(true).toBe(false);
    });

    test('Should update a person', () => {
      expect(true).toBe(false);
    });
    test('Should delete a person', () => {
      expect(true).toBe(false);
    });
  });
});
