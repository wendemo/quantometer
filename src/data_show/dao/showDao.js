var dbpool = require('../common/mysql_wraper')
var dateFormat = require('dateformat');

exports.getData = function(range, callback){
    dbpool.getConnection(function(err, connection) {
	  // connected! (unless `err` is set)
	    if (err) {
		   console.log(err); 
		   return;
		}
		
		connection.query( 'SELECT t2.name, t1.pid, t1.device_id, t1.result, t1.unit, t1.institutions, t1.check_name, t1.case_no, ' +
		 'date_format(t1.create_date, \'%Y-%m-%d %H:%i:%s\') as \'create_date\' FROM patient_result t1, patient_info t2 ' +
		 ' WHERE t1.pid = t2.pid AND t1.device_id = t2.device_id;', function(err, rows) {
		    // And done with the connection.
			if (err) {
			   console.log(err); 
			   return;
			}
			
			//console.log(rows);
			//console.log(rows[0]['0']);			
		    //var now = new Date();
			//data.create_date = dateFormat(now, "yyyy-mm-dd HH:MM:ss");
			
			console.log(rows);	
            callback(rows);		
			connection.release();
	    });
	});
}

exports.getUser = function(range, callback){
    dbpool.getConnection(function(err, connection) {
	  // connected! (unless `err` is set)
	    if (err) {
		   console.log(err); 
		   return;
		}
		
		connection.query( 'SELECT * FROM patient_info WHERE pid = ? AND device_id = ?', range,function(err, rows) {
		    // And done with the connection.
			if (err) {
			   console.log(err); 
			   return;
			}
			
			//console.log(rows);
			//console.log(rows[0]['0']);			
		    //var now = new Date();
			//data.create_date = dateFormat(now, "yyyy-mm-dd HH:MM:ss");
			
			console.log(rows);	
            callback(rows);		
			connection.release();
	    });
	});
}
