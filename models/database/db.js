const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'cloudfit',
  password: 'afasina',
});

// let sql = 'SELECT * FROM cloudfit.category;';

// pool.execute(sql, function (err, result) {
//   if (err) throw err;

//   console.log(result);
// });

module.exports = pool.promise();
