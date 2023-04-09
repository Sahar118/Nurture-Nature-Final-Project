const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Reports = require("../models/ReportsModel");


// add Reports
router.post("/add-report", authMiddleware, async (req, res) => {
    try {
        const newReports = new Reports(req.body);
        await newReports.save();
        res.send({
            success: true,
            message: "Reports added successfully",
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// get all Reports
router.get("/get-all-reports", authMiddleware, async (req, res) => {
    try {
        const reports = await Reports.find().populate('owner').sort({ createdAt: +1 });
        res.send({
            success: true,
            message: "Reports fetched successfully",
            data: reports,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// get all Reports by owner
router.post("/get-all-reports-by-owner", authMiddleware, async (req, res) => {
    try {
        const reports = await Reports.find({ owner: req.body.owner }).sort({
            createdAt: +1,
        });
        res.send({
            success: true,
            message: "Reports fetched successfully",
            data: reports,
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// update Reports
router.post("/update-reports", authMiddleware, async (req, res) => {
    try {
        await Reports.findByIdAndUpdate(req.body.ReportsId, req.body);
        res.send({
            success: true,
            message: "Reports updated successfully",
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

// delete Reports
router.post("/delete-reports", authMiddleware, async (req, res) => {
    try {
        await Reports.findByIdAndDelete(req.body.ReportsId);
        res.send({
            success: true,
            message: "Reports deleted successfully",
        });
    } catch (error) {
        res.send({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;