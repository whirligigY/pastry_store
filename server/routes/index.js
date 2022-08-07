const Router = require('express').Router;
const brandRouter = require('./brandRoute');
const userRouter = require('./userRoute');
const typeRouter = require('./typeRoute');
const router = new Router();

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);

module.exports = router;
