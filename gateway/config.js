/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  middlewares: [require('cors')()],
  routes: [
    {
      prefix: '/api',
      target: 'http://dacs_be:3001',
    },
    /*{
      prefix: '_next/static',
      target: 'http://dacs_fe:3000/.next/static',
    },*/
    {
      prefix: '/',
      urlRewrite: ({ url }) => url.replace(/(_next)/, '.next'),
      target: 'http://dacs_fe:3000',
    },
  ],
};
