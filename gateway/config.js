/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  middlewares: [require('cors')()],
  routes: [
    {
      prefix: '/api',
      target: 'https://httpbin.org',
    },
    {
      proxyType: 'websocket',
      prefix: '/echo',
      target: 'ws://ws.ifelse.io',
    },
  ],
};
