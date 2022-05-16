'use strict';

const userModel = require('./users');

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

// const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// } : {};

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  authDb: sequelize,
  users: userModel(sequelize, DataTypes),
};
