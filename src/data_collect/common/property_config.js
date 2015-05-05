var fs = require('fs');

function trim(str){ //删除左右两端的空格
　　return str.replace(/(^\s*)|(\s*$)/g, "");
}

exports.parseproperties = function(uri, properties, encoding){
    var encoding = encoding==null?'UTF-8':encoding;  //定义编码类型
	var content = fs.readFileSync(uri, encoding);
	content = content.replace(/\r\n/g, '\n');
	content = content.replace(/\r/g, '\n');
	var row_array = content.split('\n');
	for(var i in row_array){
		// 去除左右空格
		line = trim(row_array[i]);
		// 去除注释
		line = line.replace(/#.*$/g, '');			
		if(line != ''){
			keyvalue = line.split('=');
			properties[trim(keyvalue[0])] = trim(keyvalue[1]);
		}		    
	}
}