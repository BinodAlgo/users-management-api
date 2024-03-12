const pool = require('../db/config');


const getUsers = (req,res)=>{
  pool.query('SELECT * FROM users ORDER BY id',(error,results)=>{
    if(error) throw new Error(error)
    res.status(200).json(results.rows)
  })


}

// GET a user by id 
const getUserById = (req,res)=>{
  const {id} = req.params
  pool.query('SELECT * FROM users WHERE ID =$1',[id],(error,result)=>{
    if(error){
      throw error 
    }
    res.status(200).json(result.rows);
  })
}


module.exports = {
  getUsers,
  getUserById
}