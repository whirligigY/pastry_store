const Router = require('express').Router;
const router = new Router();
const controller = require('../controllers/brandController');

router.get('/', controller.getAll);
router.post('/', controller.create);

module.exports = router;
