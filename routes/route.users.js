const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser } = require('../controllers/users.controller');

// Get all users 
router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", updateUser);

module.exports = router;  