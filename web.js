var express = require('express');
var fs = require('fs');
var infile = "index.html";

var buf = fs.readFileSync(infile);
var content = buf.toString();
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
