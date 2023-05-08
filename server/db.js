const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "Zim2miz",
  host: "localhost",
  port: 5432,
  database: "todo",
});

module.exports = pool;
