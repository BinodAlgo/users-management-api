const pool = require('../db/config');


const getUsers = (req,res)=>{
  pool.query('SELECT * FROM users ORDER BY id',(error,results)=>{
    if(error) throw new Error(error)
    res.status(200).json(results.rows)
  })


}


module.exports = {
  getUsers 
}