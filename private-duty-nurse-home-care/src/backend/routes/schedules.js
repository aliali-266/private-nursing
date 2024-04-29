const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// GET schedule for a patient
router.get('/:patientId', async (req, res) => {
  try {
    const schedule = await Schedule.find({ patientId: req.params.patientId });
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new schedule
router.post('/', async (req, res) => {
  const schedule = new Schedule({
    patientId: req.body.patientId,
    date: req.body.date,
    time: req.body.time,
    nurse: req.body.nurse
  });
  try {
    const newSchedule = await schedule.save();
    res.status(201).json(newSchedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
