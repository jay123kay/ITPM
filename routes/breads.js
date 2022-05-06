const express = require('express');
const breads = require('../models/breads');
const Breads = require('../models/breads');

const router = express.Router();

//Save Stocks
 
router.post('/bread/save',(req,res)=>{

    let newBread = new Breads(req.body);

    newBread.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Stocks saved successfully"
        });
    });
});

//Get Stocks

router.get('/breads',(req,res) => {
    Breads.find().exec((err,breads) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBreads:breads
        });
    });
});


//get a specific Stock

router.get("/bread/:id",(req,res) =>{
    let breadId = req.params.id;

    Breads.findById(breadId,(err,bread) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            bread
        });
    });
});


//update stocks

router.put('/bread/update/:id',(req,res) =>{
    Breads.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,bread)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//Delete stock 

router.delete('/bread/delete/:id',(req,res)=>{
    Breads.findByIdAndRemove(req.params.id).exec((err,deletedBread) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedBread
        });
    });
});

module.exports = router;