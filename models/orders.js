const express = require('express');
const orders = require('../models/orders');
const Orders = require('../models/orders');

const router = express.Router();

//Save Order
 
router.post('/order/save',(req,res)=>{

    let newOrder = new Orders(req.body);

    newOrder.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Saved successfully"
        });
    });
});

//Get orders

router.get('/orders',(req,res) => {
    Orders.find().exec((err,orders) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrder:orders
        });
    });
});


//get a specific order

router.get("/order/:id",(req,res) =>{
    let orderId = req.params.id;

    Orders.findById(orderId,(err,order) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            order
        });
    });
});

//Delete Order

router.delete('/order/delete/:id',(req,res)=>{
    Orders.findByIdAndRemove(req.params.id).exec((err,deletedOrder) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedOrder
        });
    });
});

module.exports = router;