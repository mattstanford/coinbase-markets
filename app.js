
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var pg = require('pg');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Initialize DB connection
var conString = "postgres://postgres:password@localhost/Coinbase";


//Load controllers
require('./controllers/coinbaseDataPipe.js')(graphData);
require('./controllers/index')(app, graphData);


http.createServer(app).listen(app.get('port'), "0.0.0.0", function(){
  console.log('Express server listening on port ' + app.get('port'));
});
