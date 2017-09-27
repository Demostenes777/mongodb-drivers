const express = require('express');
const routes = require('./routes/routes');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/drivers');

app.use(bodyParser.json());
routes(app);

module.exports = app;
