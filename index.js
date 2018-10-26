var express = require('express');

const browserify = require('browserify');

var app = express();
app.listen(3002);
app.use('/styleguide', express.static('styleguide'));
app.use('/dist', express.static('dist'));