const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '*******',
  user: '******',
  database: '*********',
  password: '*********',
});

let sql = 'SELECT * FROM cloudfit.category LIMIT 1';

pool.execute(sql, function (err, result) {
  if (err) throw err;

  console.log("DB connected");
});

module.exports = pool.promise();
