const Sequelize = require('sequelize');
const pw = process.env.MYSQL_ROOT_PW || require('./config/example.config').rootPW;

const databaseName = process.env.MYSQL_DATABASE || 'bookings';

const db = new Sequelize(databaseName, 'williamwong', '', {
  host: process.env.MYSQL_URL || 'localhost',
  dialect: 'postgres',
  logging: false,
});



module.exports = db;
