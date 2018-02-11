
const Hub = require('node-xiaomi-smart-home').Hub;
const hub = new Hub();
/**
 * The function is intended to be used with xiaomi snart
 * home gateway
 * @param {object} server
 */
const xiaomiHub = (server) => {
  hub.listen();

  hub.on('message', function(message) {
    console.log(message);
  });

  hub.on('data.motion', function(sid, motion) {
    console.info('motion', sid, motion);
  });
};

module.export = xiaomiHub;
