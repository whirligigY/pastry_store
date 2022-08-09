const Router = require('express');
const router = new Router();
const controller = require('../controllers/brandController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/', controller.remove);

module.exports = router;
