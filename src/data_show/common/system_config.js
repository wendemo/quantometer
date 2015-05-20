var config = require("./property_config")

var property_dict = {};

exports.readProperty = function(uri){
    config.parseproperties(uri, property_dict)
}

exports.getProperty = function(name) {
    return property_dict[name];
}

exports.setProperty = function(name, value) {
    property_dict[name] = value;
}