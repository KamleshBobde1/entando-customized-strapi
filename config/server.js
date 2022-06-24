// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });


// For kubernet cluster
module.exports = ({ env }) => ({
  host: env('HOST', 'custom-node-service'),
  port: env.int('PORT', 1337),
  app: {
   keys: env.array("APP_KEYS",['keys','keys']),
  },
});
