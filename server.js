
var debug = require('debug')('mean-app:server');
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var server = http.createServer(app);
var app = express();
const passport = require('passport');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

//Put your angular dist folder here
app.use(express.static(path.join(__dirname, 'dist/jobReference')));
const routes = require('./routes/routes.js')(app);
app.use(passport.initialize());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
 });
function normalizePort(val) {
   var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
   }

   return false;
}
var port = normalizePort(process.env.PORT || '5555');
app.set('port', port);
 app.get('/testapi', function response(req, res) {

  res.send({"test":"test"})
 }) 
 app.get('*', function response(req, res) {
  
    res.sendFile(path.join(__dirname, 'dist/jobReference/index.html'));
  });

http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});
