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


// Create a new user 
const createUser = (req,res)=>{
  const {name,email}  = req.body;
  pool.query('INSERT INTO users (name,email) VALUES($1, $2) RETURNING *',[name,email],(error,result)=>{
    if(error) throw error 
    res.status(201).send(`User added with ID: ${result.rows[0].id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser 
}