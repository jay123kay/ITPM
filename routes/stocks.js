const express = require('express');
const stocks = require('../models/stocks');
const Stocks = require('../models/stocks');

const router = express.Router();

//Save Stocks
 
router.post('/stock/save',(req,res)=>{

    let newStock = new Stocks(req.body);

    newStock.save((err) => {
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

router.get('/stocks',(req,res) => {
    Stocks.find().exec((err,stocks) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStocks:stocks
        });
    });
});


//get a specific Stock

router.get("/stock/:id",(req,res) =>{
    let stockId = req.params.id;

    Stocks.findById(stockId,(err,stock) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            stock
        });
    });
});


//update stocks

router.put('/stock/update/:id',(req,res) =>{
    Stocks.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,stock)=>{
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

router.delete('/stock/delete/:id',(req,res)=>{
    Stocks.findByIdAndRemove(req.params.id).exec((err,deletedStock) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedStock
        });
    });
});

module.exports = router;