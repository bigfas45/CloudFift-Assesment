//migration.js
var mysql = require('mysql2');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  database: 'cloudfit',
  password: 'afasina',
});

migration.init(connection, __dirname + '/migrations', function() {
  console.log("finished running migrations");
});