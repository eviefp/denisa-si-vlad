var express = require('express');
var app = express();

app.use(express.static('source/public'));

app.listen(process.env.port || 4000, function() {
    console.log('Running on port 4000');
});