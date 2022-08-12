const Router = require('express');
const router = new Router();
const controller = require('../controllers/typeController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.get('/', controller.getAll);
router.post('/', checkRoleMiddleware('ADMIN'), controller.create);

module.exports = router;
