var mysql = require('mysql');
var sysconfig = require('./system_config');

var pool  = mysql.createPool({
  host     : sysconfig.getProperty('database.ip'),
  user     : sysconfig.getProperty('database.user'),
  password : sysconfig.getProperty('database.passwd'),
  database : sysconfig.getProperty('database.tns')
});

exports.getConnection = function(callback) {
    pool.getConnection(callback);
}
