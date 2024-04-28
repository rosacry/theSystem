const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const { name, age, gender, weight, location } = req.body;
    const newUser = new User({ name, age, gender, weight, location });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
