const express = require('express');
const userRouter = require('./route.users');
const router = express.Router();

router.use('/users', userRouter);

module.exports = router;
