var dbpool = require('../common/mysql_wraper')
var dateFormat = require('dateformat');

exports.saveData = function(data){
    dbpool.getConnection(function(err, connection) {
	  // connected! (unless `err` is set)
	    if (err) {
		   console.log(err); 
		   return;
		}
		
		connection.query( 'select date_format(now(), \'%Y-%m-%d %H:%i:%s\') as \'0\' from dual', data, function(err, rows) {
		    // And done with the connection.
			if (err) {
			   console.log(err); 
			   return;
			}
			
			//console.log(rows);
			//console.log(rows[0]['0']);			
		    //var now = new Date();
			//data.create_date = dateFormat(now, "yyyy-mm-dd HH:MM:ss");
			data.create_date = rows[0]['0'];
			
			connection.query( 'INSERT INTO patient_result SET ?', data, function(err, rows) {
				// And done with the connection.
				if (err) {
				   console.log(err); 
				   return;
				}
				
				console.log(rows);
				
				connection.release();
			});
	    });
	});
}
