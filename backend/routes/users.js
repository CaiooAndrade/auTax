// Require The Express Framework
const express = require('express')

// Set The Express Router
const router = express.Router();


let users = [{
    id:1,
    firstName:'Arya',
    lastName:'Priyadarshi',
    salary:30000.0,
    tax:0,
},{
    id:2,
    firstName:'Tharunn',
    lastName:'Sundar',
    salary:30000.0,
    tax:0,
}];

// Create The Routes
router.get('/', (req, res) => {
  res.json({users})
})

router.post('/:id', (req, res) => {
  let u = req.body;
  let edited = false
  users.forEach((user,index,arr)=>{
    if (user.id === parseInt(req.params.id)){
      arr[index] = u
      edited = true;
    }
  })
  if (edited){
    res.json({edited:1,messages:'User updated'})
  } else {
    res.json({edited:0,messages:'Nothing happens'})
  }
})

router.put('/', (req, res) => {
  let u = req.body;
  let lastIndex;
  if (users.length>0)
    lastIndex = users[users.length-1].id
  else 
    lastIndex = 0;
  u.id = lastIndex+1;
  users.push(u)
  res.json({inserted:1,insertedID:u.id})
})

router.delete('/:id', (req, res) => {
  let size = users.length;
  users = users.filter((user)=>{
    return user.id !== parseInt(req.params.id)
  })
  if (users.length == size){
    res.json({deleted:0,messages:'Nothing happens'})
  } else {
    res.json({deleted:1,message:'User Deleted'})
  }
})

// Export the Router
module.exports = router