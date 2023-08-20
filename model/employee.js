
const mongoose = require('mongoose')


const employeeschema =  mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
   },
    
    {
        timestamp:true
    }

)

const  Employees = mongoose.model('Employee' , employeeschema);
module.exports  = Employees;