const express = require('express');
const router = express.Router();
const item = require('../models/item');

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
    let newItem = new item({
        name: req.body.name,
        description: req.body.description,
        kind: req.body.kind,
        category: req.body.category,
        color: req.body.color,
        createTime: req.body.create_time,
        location: req.body.location
    });
    item.addItem(newItem, (err, newItem) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new item. Error: ${err}. req: ${req}` });

        }
        else
            res.json({ success: true, message: "Added successfully." });

    });
});

//TODO: add delete option

module.exports = router;