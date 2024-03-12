const express = require('express');
const router = express.Router();
const dbConfig = require('../db/config')
require('dotenv').config();

// Database Connection 
const Pool = require('pg').Pool;
const pool = new Pool(
dbConfig.config
)
router.get("/",(req,res)=>{
  res.json({users:""});
})


module.exports = router;