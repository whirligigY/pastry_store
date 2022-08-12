const Router = require('express');
const router = new Router();
const controller = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', controller.getUsers);
router.get('/auth', authMiddleware, controller.check);
router.post('/registration', controller.registration);
router.post('/login', controller.login);

module.exports = router;
