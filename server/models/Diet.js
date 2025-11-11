// server/models/Diet.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dietSchema = new Schema({
  userId: { type: String, required: true },
  foodItem: { type: String, required: true },
  calories: { type: Number, required: true }
}, { timestamps: true });

const Diet = mongoose.model('Diet', dietSchema);
module.exports = Diet;