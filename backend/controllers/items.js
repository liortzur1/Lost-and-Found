const express = require('express');
const router = express.Router();
const item = require('../models/item');

// GET HTTP method to /users
router.get('/',(req,res) => {
    item.getAllItems((err, items)=> {
        if(err) {
            res.json({success:false, message: `Failed to load all items. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, items:items},null,2));
            res.end();
        }
    });
});
/*
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
});*/

//POST HTTP method to /users
router.post('/', (req,res,next) => {
    let newItem = new item({
        name: req.body.name,
        description: req.body.description,
        kind: req.body.kind,
        category: req.body.category,
        color: req.body.color,
        create_time: req.body.create_time,
        location: req.body.location,
        username: req.body.username
    });
    item.addItem(newItem,(err, newItem) => {
        if(err) {
            res.json({success: false, message: `Failed to create a new item. Error: ${err}. req: ${req}`});

        }
        else
            res.json({success:true, message: "Added successfully."});

    });
});
/*
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
});*/

module.exports = router;