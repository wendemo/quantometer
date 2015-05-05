var dbpool = require('../common/mysql_wraper')

exports.saveData = function(data){
    dbpool.getConnection(function(err, connection) {
	  // connected! (unless `err` is set)
	    if (err) {
		   console.log(err); 
		   return;
		}
		
		connection.query( 'INSERT INTO test SET ?', data, function(err, rows) {
		    // And done with the connection.
			if (err) {
			   console.log(err); 
			   return;
			}
			
			console.log(rows);
			
		    connection.release();
	    });
	});
}