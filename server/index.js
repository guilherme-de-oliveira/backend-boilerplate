const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');
const api = require('./api');
const http = require('./http');
const path = require('path');

module.exports = (app, rootDir) => {
    app.set('rootDir', rootDir);

    // Midleware parsers
    app.use(cookieParser(config.cookieSecret, {samesite: true, secure: true, httpOnly: true}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    app.use('/api', api(app, config));
    
    // Front-end
    const staticRoute = path.join(__dirname, '../dist/odw-monitor');
    // Serving static files
    app.use('/', (req, res, next) => {
        console.log('app running');
        console.log('requested client', staticRoute);
        next();
    }, express.static(staticRoute));

    http(app, config, rootDir);

    return app;
};
