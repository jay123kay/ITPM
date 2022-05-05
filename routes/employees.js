const express = require('express');
const employees = require('../models/employees');
const Employees = require('../models/employees');


const router = express.Router();

//Save Employees
 
router.post('/employee/save',(req,res)=>{

    let newEmployee = new Employees(req.body);

    newEmployee.save((err) => {
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

router.get('/employees',(req,res) => {
    Employees.find().exec((err,employees) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEmployees:employees
        });
    });
});


//get a specific Employee

router.get("/employee/:id",(req,res) =>{
    let employeeId = req.params.id;

    Employees.findById(employeeId,(err,employee) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            employee
        });
    });
});


//update Employees

router.put('/employee/update/:id',(req,res) =>{
    Employees.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,employee)=>{
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

router.delete('/employee/delete/:id',(req,res)=>{
    Employees.findByIdAndRemove(req.params.id).exec((err,deletedEmployee) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successfull",deletedEmployee
        });
    });
});

module.exports = router;