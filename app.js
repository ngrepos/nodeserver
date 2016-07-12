var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send("Hello Node");}
);

app.get('/Books', function (req, res) {
    res.send("hello books");
});

app.listen(port, function (err) {
    console.log("Running on port " + port);
});