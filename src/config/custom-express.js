
require ('marko/node-require');
require ('marko/express');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use('/estatico',express.static('src/app/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
const rotas = require('../app/rotas/rotas');
rotas(app);


module.exports = app;