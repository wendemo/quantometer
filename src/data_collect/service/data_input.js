var dataDao = require('../dao/testDao')

exports.DataInput = function(req, res){
    data = req.body;
    
	dataDao.saveData(data);
	
    res.send('SUCCESS');
}