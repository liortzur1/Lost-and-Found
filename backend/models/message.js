const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = Schema({
    fromUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    toUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    title: { type: String, require: true },
    content: { type: String, required: true },
    createTime: { type: Date, required: true },
    read: { type: Boolean, required: true },
    item: { type: Schema.Types.ObjectId, ref: "item", required: true }
});

const messagesList = module.exports = mongoose.model("message", messageSchema);

module.exports.getMessagesByUsername = (username) => {
    return new Promise((resolve, reject) => {
        messagesList.find()
            .populate("fromUser")
            .populate("toUser").exec((err, messages) => {
                if (err) {
                    reject(new Error(err));
                }
                else {
                    resolve(messages.filter(msg => msg.fromUser.username == username || msg.toUser.username == username));
                }
            });
    });
};

module.exports.totalMessagesAmount = (username) => {
    return new Promise((resolve, reject) => {
        messagesList.getMessagesByUsername(username).then(messages => {
            resolve(messages.map(msg => 1).reduce((sum, currentMsg) => sum + currentMsg));
        }).catch(reject)
    })
} 