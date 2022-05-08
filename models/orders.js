const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    cusId:{
        type:String,
        required:true
    },
    cusName:{
        type:String,
        required:true
    },
    orderID:{
        type:String,
        required:true
    },
    orderType:{
        type:String,
        required:true
    },
    quant:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Orders',orderSchema);