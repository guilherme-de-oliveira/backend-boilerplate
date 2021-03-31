require('dotenv').config();
const express = require('express');
const server = require('./server');

const app = express();

server(app, __dirname);

module.exports = app;