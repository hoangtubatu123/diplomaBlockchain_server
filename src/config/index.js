export default {
  app: {
    port: process.env.DEV_APP_PORT || 8080,
    appName: process.env.APP_NAME || 'Diploma',
    env: process.env.NODE_ENV || 'development'
  },
  multichain: {
    port: '9230',
    host: 'localhost',
    user: 'multichainrpc',
    pass: 'HgGMbtGVLgHpDGuMgyvmsePZbjfeZAPQBiiF4gbj1q8x'
  }
};
