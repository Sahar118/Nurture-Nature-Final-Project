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

//  get all events
router.get('/get-all-events', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: +1 });
        res.send({
            success: true,
            message: " Events fetched successfully",
            data: events
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
})

//  Update an event
router.post('/update-event', authMiddleware, async (req, res) => {
    try {
        await Event.findByIdAndUpdate(req.body.eventId, req.body);
        res.send({
            success: true,
            message: "Event update successfully"
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
})

// Delete an Event
router.post("/delete-event", authMiddleware, async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.body.eventId);
        res.send({
            success: true,
            message: "Event Deleted successfully"
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
})


module.exports = router;