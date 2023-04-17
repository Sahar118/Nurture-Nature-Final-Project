const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Chat = require('../models/chatModels')
const Message = require('../models/messageModel')

//  new message
router.post('/new-message', async (req, res) => {
    try {
        //  Store Message
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save()

        //update last message of chat 
        await Chat.findOneAndUpdate(
            { _id: req.body.chat },
            {
                lastMessage: savedMessage._id,
                unreadMessages: {
                    $inc: 1,
                },
            }
        );
        res.send({
            success: true,
            message: "Message sent successfully",
            data: savedMessage,
        });
    } catch (error) {
        res.send({
            success: false,
            message: " Error sending Message",
            error: error.message
        });
    }
})

// Get All Messages of a chat:
router.get('/get-all-messages/:chatId', authMiddleware, async (req, res) => {
    try {
        const messages = await Message.find({
            chat: req.params.chatId,
        }).sort({ createdAt: 1 });
        res.send({
            success: true,
            message: "Message sent successfully",
            data: messages,
        });
    } catch (error) {
        res.send({
            success: false,
            message: " Error Fetching Messages",
            error: error.message
        });
    }
})

module.exports = router;
