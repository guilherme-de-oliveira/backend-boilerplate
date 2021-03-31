let env = {
  ...process.env
};

if (!env.NODE_ENV) {
    console.log('Invalid/insufficient ENV variables');
    process.exit(1);
}

console.log("Environment: ",env.DB2);
const config = {
    env: env.NODE_ENV,
    isProduction: false,
    url: env.URL,
    http: {
      port: process.env.PORT || 3000,
      certFile: env.CERT_FILE_NAME,
      passwordFile: env.PSW_FILE_NAME,
    },
    cookieSecret: env.COOKIE_SECRET,
    jwtSecret: env.JWT_SECRET
  };

  module.exports = Object.freeze(config);
  