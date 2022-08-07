const Router = require('express').Router;
const router = new Router();
const controller = require('../controllers/userController');

router.get('/', controller.getUsers);
router.get('/auth', controller.check);
router.post('/registration', controller.registration);
router.post('/login', controller.login);

module.exports = router;
