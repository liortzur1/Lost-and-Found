const express = require('express');
const router = express.Router();
const user = require('../models/user');

// GET HTTP method to /users
router.get('/',(req,res) => {
    user.getAllUsers((err, users)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all users. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, users:users},null,2));
            res.end();
        }
    });
});

// GET HTTP method to /users/:username/:password
router.get('/:username/:password',(req,res) => {
    user.getUserByUsernameAndPassword(req.params.username, req.params.password,(err, user)=> {
        if(err) {
            res.json({success:false, message: `Failed to find user. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, user:user},null,2));
            res.end();
        }
    });
});

//POST HTTP method to /users
router.post('/', (req,res,next) => {
    let newUser = new user({
        username: req.body.username,
        password: req.body.password,
        fullName: req.body.fullName,
        mail: req.body.mail,
        phone: req.body.phone,
        city: req.body.city,
        admin: req.body.admin
    });
    user.addUser(newUser,(err, newUser) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new user. Error: ${err}. req: ${req}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});

//DELETE HTTP method to /Users. Here, we pass in a param which is the object id.
router.delete('/:id', (req,res,next)=> {
  //access the parameter which is the id of the item to be deleted
    let id = req.params.id;
  //Call the model method deleteUserById
    user.deleteUserById(id,(err,currUser) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the user. Error: ${err}`});
        }
        else if(currUser) {
            res.json({success:true, message: "Deleted successfully"});
        }
        else
            res.json({success:false});
    })
});

module.exports = router;