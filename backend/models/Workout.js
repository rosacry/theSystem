const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    type: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
    intensity: { type: String, required: true }
});

module.exports = mongoose.model('Workout', workoutSchema);
