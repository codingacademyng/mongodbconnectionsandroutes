const express  = require('express');

const Emp = require('../model/employee')
const router =  express.Router();


router.get('/employee', async (req, res)=>{
 
    // const myusr = Emp.create({
    //     name:"Oracle Kenny",
    //     email:"codingacad@gmail.com",
    //     password:"123456"
    // })

    const userExist = Emp.findOne('codingman@gmail.com')

    if(userExist){
        res.status(404).send({message:'User already Exist'})
    }

    const myusr = await Emp.create({
        name:"Oracle Kenny",
        email:"codingman@gmail.com",
        password:"123456"
    })
    res.send('Message sent')
 
})

router.post('/employee', async (req,res)=>{
   const myusr = await Emp.create({
       name:"Oracle Kenny",
       email:"codingman@gmail.com",
       password:"123456"
   })

   
   if(myusr){
    console.log('my user save')
   }
})


module.exports = router;