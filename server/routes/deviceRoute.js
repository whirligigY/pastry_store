const Router = require('express');
const router = new Router();
const controller = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middlewares/checkRoleMiddleware');

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', checkRoleMiddleware('ADMIN'), controller.create);

module.exports = router;
