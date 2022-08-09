const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRoute');
const userRouter = require('./userRoute');
const typeRouter = require('./typeRoute');
const deviceRouter = require('./deviceRoute');

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/device', deviceRouter);

module.exports = router;
