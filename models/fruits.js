const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    uPrice:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    inValue:{
        type:Number,
        required:true
    },
    mDate:{
        type:String,
        required:true
    },
    eDate:{
        type:String,
        required:true
    }  

});

module.exports = mongoose.model('Fruits',fruitSchema);