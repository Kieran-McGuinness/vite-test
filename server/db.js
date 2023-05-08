const Pool = require("pg").Pool;
require("dotenv").config();
const { DB_PASSWORD } = process.env;
const pool = new Pool({
  user: "postgres",
  password: `${DB_PASSWORD}`,
  host: "localhost",
  port: 5432,
  database: "todo",
});

module.exports = pool;
