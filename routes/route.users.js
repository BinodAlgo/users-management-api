const express = require('express');
const router = express.Router();
const {getUsers,getUserById} = require('../controllers/users.controller');

// Get all users 
router.get("/",getUsers);

router.get("/:id",getUserById)

module.exports = router;  