const express = require('express');
const fruits = require('../models/fruits');
const Fruits = require('../models/fruits');

const router = express.Router();

//Save Stocks
 
router.post('/fruit/save',(req,res)=>{

    let newFruit = new Fruits(req.body);

    newFruit.save((err) => {
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

router.get('/fruits',(req,res) => {
    Fruits.find().exec((err,fruits) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFruits:fruits
        });
    });
});


//get a specific Stock

router.get("/fruit/:id",(req,res) =>{
    let fruitId = req.params.id;

    Fruits.findById(fruitId,(err,fruit) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            fruit
        });
    });
});


//update stocks

router.put('/fruit/update/:id',(req,res) =>{
    Fruits.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,fruit)=>{
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

router.delete('/fruit/delete/:id',(req,res)=>{
    Fruits.findByIdAndRemove(req.params.id).exec((err,deletedFruit) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedFruit
        });
    });
});

module.exports = router;