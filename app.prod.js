const path = require('path');
const express = require('express');

const app = require('./api.js');

const port = process.env.PORT || 3000;

app.set('port', port);

app.use('/static', express.static(path.join(__dirname, 'static')));

module.exports = app;
