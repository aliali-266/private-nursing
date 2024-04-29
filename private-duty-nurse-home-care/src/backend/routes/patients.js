const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// GET all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new patient
router.post('/', async (req, res) => {
  const patient = new Patient({
    name: req.body.name,
    age: req.body.age,
    condition: req.body.condition,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email
  });
  try {
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
