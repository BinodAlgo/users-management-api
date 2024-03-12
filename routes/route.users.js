const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get("/",(req,res)=>{
  res.json({users:""});
})


module.exports = router;