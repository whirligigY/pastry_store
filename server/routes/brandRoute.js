const Router = require('express');
const router = new Router();
const controller = require('../controllers/brandController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.get('/', controller.getAll);
router.post('/', checkRoleMiddleware('ADMIN'), controller.create);
router.delete('/', controller.remove);

module.exports = router;
