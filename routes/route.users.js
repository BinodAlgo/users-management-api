const express = require('express');
const router = express.Router();


// Get all users 
router.get("/",(req,res)=>{
  res.json({users:""});
})


module.exports = router;