// init project
var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/:date_string',function(request,response){
  var date_string = request.params.date_string;
  var date = new Date(date_string);
  if(date instanceof Date && !isNaN(date)) response.json({"unix": date.getTime(), "utc" : date.toUTCString() })
  else response.json({"error" : "Invalid Date" });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
