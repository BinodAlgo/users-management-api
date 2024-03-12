// Declaration of variables 
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;



// App Configuration 
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

// Routes 
app.use(require('./routes/route.index'));