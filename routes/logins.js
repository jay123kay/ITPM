const express = require('express');
const logins = require('../models/logins');
const Logins = require('../models/logins');

const router = express.Router();

//save logins

router.post('/login/save', (req,res)=>{

    let newLogin =new logins(req.body);

    newLogin.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "Logged in successfully"
        });
    });
});




module.exports = router;
