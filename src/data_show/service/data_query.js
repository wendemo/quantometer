var dataDao = require('../dao/showDao')

exports.DataQuery = function(req, res){
    range = req.body;
    
    dataDao.getData(range, function(rows){
	        res.send(JSON.stringify(rows));
	});
}

exports.UserQuery = function(req, res){
    //console.log(req);
	//res.send("SUCCESS");
	var range = [Number(req.query.pid), req.query.device_id];
    
    dataDao.getUser(range, function(rows){
	        res.send(JSON.stringify(rows));
	});
}
