const express = require('express');
const Workout = require('../models/Workout');
const router = express.Router();

// Log a new workout
router.post('/', async (req, res) => {
    const { userId, type, duration, intensity } = req.body;
    const newWorkout = new Workout({ userId, type, duration, intensity });
    try {
        const savedWorkout = await newWorkout.save();
        res.status(201).json(savedWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get nutritional guidance (Placeholder)
router.get('/nutrition', (req, res) => {
    res.json({ message: "Here will be nutritional advice based on user activity." });
});

module.exports = router;
