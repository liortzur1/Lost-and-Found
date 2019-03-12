const express = require('express');
const router = express.Router();
const item = require('../models/item');
const user = require('../models/user');
const message = require('../models/message');

router.post('/', (req, res, next) => {

        let newMessage = new message({
            fromUser: req.body.fromUser,
            toUser: req.body.toUser,
            title: req.body.title,
            content: req.body.content,
            create_time: new Date(),
            isRead: false,
            item: req.body.item
        });
        newMessage.save(err => {
            if (err) {
                console.error(err);
                res.json({ success: false, message: `Failed to create a new Message. Error: ${err}. req: ${req}` });
            }
            else {
                res.sendStatus(200);
            }
        });
});

router.get('/:item_id', (req, res) => {
    message.getMessagesByItem(req.params.item_id, (err, messages) => {
        if(err) {
            res.json({success:false, message: `Failed to find messages by ID. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({ success: true, messages: messages }, null, 2));
            res.end();
        }
    })
});

router.get('/byUser/:username', (req, res) => {
    message.getMessagesByUsername(req.params.username)
        .then(messages => {
            res.write(JSON.stringify({ success: true, messages: messages }, null, 2));
            res.end();
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
});

router.get('/amount/:username', (req, res) => {
    message.totalMessagesAmount(req.params.username)
        .then(amount => {
            res.json({ amount });
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
});

//TODO: valadition (?) - if the items belogns to the user
router.delete('/:id', (req, res) => {
    item.deleteOne({ _id: req.params.id }, err => {
        if (err)
            res.json({ success: false, message: `Failed to delete item. Error: ${err}` });
        else
            res.sendStatus(200);
    });
});

module.exports = router; 