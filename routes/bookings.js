const express = require('express');
const bookings = require('../models/bookings');
const Bookings = require('../models/bookings');

const router = express.Router();

//save bookings

router.post('/booking/save', (req,res)=>{

    let newBooking =new bookings(req.body);

    newBooking.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "Booking saved successfully"
        });
    });
});


//get bookings

router.get('/bookings',(req,res)=>{
    bookings.find().exec((err,bookings) =>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success:true,
            existingBookings:bookings
        });
    });
});

//get a specific post

router.get("/booking/:id",(req,res) =>{
   let bookingId = req.params.id;

    Bookings.findById(bookingId,(err, booking)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            booking     
           });

    });    
});

//update bookings

router.put('/booking/update/:id',(req,res)=>{
    Bookings.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,booking)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete booking

router.delete('/booking/delete/:id',(req,res)=>{
    Bookings.findByIdAndRemove(req.params.id).exec((err,deletedBooking) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",deletedBooking
        });

        return res.json({
            message:"Delete Successfull", deletedBooking
        });
    });
});

module.exports = router;
