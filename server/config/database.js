// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('root', 'hyundong456', '123456', {
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;