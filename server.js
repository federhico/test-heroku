var express = require("express");
var path = require('path');
var bodyParser  = require("body-parser");
var app  = express();
var cors = require('cors');  
var http = require('http');
var rest_v1 = require("./api/v1/routes");
var md5 = require('MD5');
var express = require("express"); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());  

app.set('port',5000);

app.use('/', express.static(path.join(__dirname + '/public'), { maxAge: 86400000 /* 1d */ }));   

var router = express.Router();
app.use('/v1', router);

//var rest_router_v1 = new rest_v1(router,md5);

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});   


var server;

server = http.createServer(app);
server.listen(process.env.PORT || 5000, function(){
    console.log(
        "Listening"
    )
});
        
        




