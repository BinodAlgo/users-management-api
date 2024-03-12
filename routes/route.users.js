const express = require('express');
const router = express.Router();
const {getUsers} = require('../controllers/users.controller');

// Get all users 
router.get("/",getUsers);



module.exports = router;  