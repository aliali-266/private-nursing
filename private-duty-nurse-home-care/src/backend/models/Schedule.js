const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  date: { type: Date, required: true },
  time: String,
  nurse: String
});

module.exports = mongoose.model('Schedule', scheduleSchema);
