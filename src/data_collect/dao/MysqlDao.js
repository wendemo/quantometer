var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : '192.168.56.101',
  user     : 'sa',
  password : '123456',
  database : 'test'
});

exports.getConnection = function(callback) {
    pool.getConnection(callback);
}
