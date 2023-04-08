const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const Event = require('../models/eventModel')

//  add a new Event
router.post('/add-event', authMiddleware, async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        await newEvent.save();
        res.send({
            success: true,
            message: "Event added successfully",
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;