var express = require('express');
var app = express();


app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html'); // load the single view file 
});

app.listen(process.env.PORT || 8080);
console.log("If running locally, app listening on port 8080");
