// server/models/Workout.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  userId: { type: String, required: true },
  exerciseType: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number }
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;