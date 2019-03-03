const express = require('express');
const router = express.Router();
const item = require('../models/item');
const user = require('../models/user');
const category = require('../models/category');

router.get('/', (req, res) => {
    item.getAllItems((err, items) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all items. Error: ${err}` });
        }
        else {
            res.write(JSON.stringify({ success: true, items: items }, null, 2));
            res.end();
        }
    });
});

router.post('/', (req, res, next) => {
    category.getCategoryByName(req.body.category).then(category => {
        let newItem = new item({
            name: req.body.name,
            description: req.body.description,
            kind: req.body.kind,
            category: category,//await category.getCategoryByName(req.body.category),
            color: req.body.color,
            createTime: req.body.create_time,
            location: req.body.location,
            username: req.body.username
        });
        let username = req.body.username;
        newItem.save(err => {
            if (err) {
                console.error(err);
                res.json({ success: false, message: `Failed to create a new item. Error: ${err}. req: ${req}` });
            }
            else {
                user.addItemToUser(newItem, username, (err) => {
                    if (err) {
                        res.sendStatus(500);
                    }
                    else {
                        res.json({ success: true, message: "Added successfully." });
                    }
                })
            }
        });

    })
});

//TODO: check if works
router.delete('/:id', (req, res) => {
    item.deleteOne({ _id: req.params.id }, err => {
        if (err)
            res.sendStatus(500);
        else
            res.status(200);
    });
});

module.exports = router;