const dotenv = require('dotenv').config();

const config = {
  db:{
    host: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE, 
  }
};

module.exports = config;
