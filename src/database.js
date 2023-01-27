const  Pool  = require("mysql2/promise");
const Config = require("./config.js");

const pool = Pool.createPool(Config.db);

module.exports = pool;