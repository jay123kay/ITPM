const mongoose= require('mongoose');

const bookingSchema = new mongoose.Schema({

    customerName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventStart:{
        type:String,
        required:true
    },
    eventEnd:{
        type:String,
        required:true
    },
    noOfGuests:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Bookings', bookingSchema);