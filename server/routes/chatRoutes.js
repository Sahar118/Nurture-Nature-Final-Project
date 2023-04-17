const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Chat = require('../models/chatModels')
const Message = require('../models/messageModel')
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

// clear all unread messages of a chat

router.post("/clear-unread-messages", authMiddleware, async (req, res) => {
    try {
        // find chat and update unread messages count to 0
        const chat = await Chat.findById(req.body.chat);
        if (!chat) {
            return res.send({
                success: false,
                message: "Chat not found",
            });
        }
        const updatedChat = await Chat.findByIdAndUpdate(
            req.body.chat,
            {
                unreadMessages: 0,
            },
            { new: true }
        )
            .populate("members")
            .populate("lastMessage");

        // find all unread messages of this chat and update them to read
        await Message.updateMany(
            {
                chat: req.body.chat,
                read: false,
            },
            {
                read: true,
            }
        );
        res.send({
            success: true,
            message: "Unread messages cleared successfully",
            data: updatedChat,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "Error clearing unread messages",
            error: error.message,
        });
    }
});
module.exports = router;
