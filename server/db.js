const Pool = require("pg").Pool;
require("dotenv").config();
const { DB_PASSWORD } = process.env;
const pool = new Pool({
  user: "postgres",
<<<<<<< HEAD
  password: `${DB_PASSWORD}`,
=======
  password: 
>>>>>>> adb9af9277a8ef30f17174b644a957e50bb37b3f
  host: "localhost",
  port: 5432,
  database: "todo",
});

module.exports = pool;
