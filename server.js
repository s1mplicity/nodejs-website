var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = process.env.PORT || 8080;


app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

var router = require('./app/routes');
app.use('/', router);


app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('app started running on http://localhost:8080');
});

