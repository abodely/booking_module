const Sequelize = require('sequelize');
const pw = process.env.MYSQL_ROOT_PW || require('./config/sequelize.config').rootPW;

const databaseName = process.env.MYSQL_DATABASE || 'bookings';


const db = new Sequelize(databaseName, 'root', pw, {
  host: process.env.MYSQL_URL || 'localhost',
  dialect: 'mysql',
  logging: false,
});

db.query('CREATE DATABASE IF NOT EXISTS bookings').then(() => console.log('Database created'));

module.exports = db;
