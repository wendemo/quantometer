var dataDao = require('../dao/resultDao')

exports.DataInput = function(req, res){
    data = req.body;
    
    dataDao.saveData(data);
	
    res.send('SUCCESS');
}
