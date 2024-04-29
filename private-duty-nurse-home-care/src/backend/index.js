const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const patientsRouter = require('./routes/patients');
const schedulesRouter = require('./routes/schedules');

// Use routes
app.use('/api/patients', patientsRouter);
app.use('/api/schedules', schedulesRouter);

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send("Hello from the backend of the Private Duty Nurse Home Care System!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
