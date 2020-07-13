const passport = require('passport');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
