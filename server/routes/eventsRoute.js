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
router.get('/get-all-events', authMiddleware, async (req, res) => {
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
//  get event by id
router.get('/get-event-by-id/:id', authMiddleware, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.send({
            success: true,
            message: " Events fetched successfully",
            data: event,
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
})

//  get event by District
router.get('/get-event-by-district/:district', authMiddleware, async (req, res) => {
    try {
        const event = await Event.findById(req.params.district);
        res.send({
            success: true,
            message: " Events fetched successfully",
            data: event,
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        });
    }
})


// Save event by id
router.post('/saved-event/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send('No event with that id');
        }
        const event = await Event.findById(id);
        event.SaveEvent++;
        await event.save();
        res.send({
            success: true,
            message: 'Event saved successfully',
            data: event,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});


module.exports = router;