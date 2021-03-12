var express = require("express");

var app = express();
const serverPort = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(async(req, res, next) =>{
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
	next();
});

app.use(require('./routes'))

app.use(express.static('dist'))

app.listen(serverPort, () => {
 console.log(`Starting backend server on port ${serverPort}`);
});