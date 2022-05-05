const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },

    role:{
        type : String,
        required : true
    },

    age:{
        type : Number,
        required : true
    },

    gender:{
        type : String,
        required : true
    },

    email:{
        type : String,
        required : true
    },

    address:{
        type : String,
        required : true
    },

    contactNo:{
        type : String,
        required : true
    },

    password:{
        type : String,
        required : true
    }  

})

module.exports = mongoose.model('Employees',employeeSchema);