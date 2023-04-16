const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Chat = require('../models/chatModels')

// Create new chat
router.post('/create-new-chat', authMiddleware, async (req, res) => {
    try {
        const newChat = new Chat(req.body)
        const savedChat = await newChat.save()
        await savedChat.populate("members");
        res.send({
            success: true,
            message: 'Chat created Successfully',
            data: savedChat,
        })
    } catch (error) {
        res.send({
            success: false,
            message: 'Error creating Chat ',
            error: error.message,
        })
    }
})

//  get all chat of current user
router.get('/get-all-chats', authMiddleware, async (req, res) => {
    try {
        const chats = await Chat.find({
            members: {
                $in: [req.body.userId],
            },
        }).populate("members").populate("lastMessage")
            .sort({ updatedAt: -1 });
        res.send({
            success: true,
            message: " Chats fetched successfully",
            data: chats,
        })
    } catch (error) {
        res.send({
            success: false,
            message: " Error fetching chats",
            error: error.message
        });
    }
})

module.exports = router;
