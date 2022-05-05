const mongoose= require('mongoose');

const paymentSchema = new mongoose.Schema({

    customerName:{
        type:String,
        required:true
    },
    noofhours:{
        type:String,
        required:true
    },
    chargeperhour:{
        type:String,
        required:true
    },
    totalcharge:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Payments', paymentSchema);