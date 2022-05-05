const express = require('express');
const servers = require('../models/servers');
const Servers = require('../models/servers');


const router = express.Router();

//Save Employees
 
router.post('/server/save',(req,res)=>{

    let newServer = new Servers(req.body);

    newServer.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employee saved successfully"
        });
    });
});

//Get Employees

router.get('/servers',(req,res) => {
    Servers.find().exec((err,servers) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingServers:servers
        });
    });
});


//get a specific Employee

router.get("/server/:id",(req,res) =>{
    let serverId = req.params.id;

    Servers.findById(serverId,(err,server) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            server
        });
    });
});


//update Employees

router.put('/server/update/:id',(req,res) =>{
    Servers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,server)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//Delete Employee

router.delete('/server/delete/:id',(req,res)=>{
    Servers.findByIdAndRemove(req.params.id).exec((err,deletedServer) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedServer
        });
    });
});

module.exports = router;