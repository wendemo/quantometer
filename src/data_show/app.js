var express = require('express');
var sysconfig = require('./common/system_config');
sysconfig.readProperty('./data_show.properties');
var query = require('./service/data_query');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();




// all environments
app.set('port', process.env.PORT || sysconfig.getProperty('port'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/query.do', query.DataQuery);
app.get('/user.do', query.UserQuery);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

