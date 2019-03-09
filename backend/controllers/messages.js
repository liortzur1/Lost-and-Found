const express = require('express');
const router = express.Router();
const item = require('../models/item');
const user = require('../models/user');
const message = require('../models/messages');

router.post('/', (req, res, next) => {
    user.getUsers([req.body.fromUser, req.body.toUser]).then(users => {

        let newMessage = new message({
            fromUser: users[0],
            toUser: users[1],
            title: req.body.title,
            content: req.body.content,
            createTime: req.body.createTime,
            read: req.body.read,
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
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

router.get('/:username', (req, res) => {
    message.getMessagesByUsername(req.params.username)
        .then(messages => {
            res.send(messages);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
})
router.get('/amount/:username', (req, res) => {
    message.totalMessagesAmount(req.params.username)
        .then(amount => {
            res.json({ amount });
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
})

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