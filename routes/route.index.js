const express = require('express');
const userRouter = require('./route.users');
const router = express.Router();

router.use(userRouter);

module.exports = router;
