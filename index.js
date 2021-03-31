
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config');
// const api = require('./api');
const http = require('./http');
// const path = require('path');
var classes = require('./classes/index')

module.exports = (app, rootDir) => {
    app.set('rootDir', rootDir);
    // Midleware parsers
    app.use(cookieParser(config.cookieSecret, {samesite: true, secure: true, httpOnly: true}));
    app.use(bodyParser.json());
    // app.use('/', api(app,config));
    classes(app, config)
    http(app, config, rootDir);
    
    return app;
};
