const { Router } = require('express');
const cors = require('cors');
const path = require('path');
//APIS
const processes = require('./processes/monitor');

module.exports = (app, config) => {
    const router = Router();
    
    router.use(cors());
    router.use('/processes/monitor', processes(Router, config));

    return router;
}
