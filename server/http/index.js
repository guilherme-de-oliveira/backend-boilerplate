const https = require('https');
const fs = require('fs');
const path = require('path');

  /**
   * Initialize server
   * @param {Object} app express app instance
   * @param {Number} port port number
  */
  
    function initProd (app, port) {
        app.listen(port, () => console.log(`Server running on production mode at ${port}`));
    }

  /**
   * Bootstrap https server
   * @param {Object} app express app instance
   * @param {Number} port port number
   * @param {Object} config configuration object
   * @param {String} config.env current environment
   * @param {Object} config.http http serve setup configuration object
   * @param {Number} config.http.port Port to bind the server to
   * @param {String} config.http.pfxPassphrase cert secret
   * @param {String} config.http.pfxFile cert file name (path is root/certs)
   */

  function initDev (app, { env, http }, port, rootDir) {
    const httpsConfig = {
      key: fs.readFileSync(path.join(rootDir, 'certs', http.passwordFile)),
      cert: fs.readFileSync(path.join(rootDir, 'certs', http.certFile))
    }
    https
      .createServer(httpsConfig, app)
      .listen(port, () => console.log(`Server running on development mode at ${port}`));
  }

// @TODO: Se env === production, iniciar como HTTPS

module.exports = (app, config, rootDir) => {
  const port = process.env.PORT || 3000;
  const env = process.env.NODE_ENV || 'production';
  env === 'development' ? initDev(app, config, port, rootDir) : initProd(app, port);
};