const router = require('express').Router();
const farmers = require('../controllers/farmers');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/farmers')
  .get(farmers.index)
  .post(secureRoute, farmers.create);

router.route('/farmers/:id')
  .get(farmers.show)
  .put(secureRoute, farmers.update)
  .delete(secureRoute, farmers.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
