const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

// MongoDB ulanish
mongoose.connect('mongodb://localhost:27017/reelmate');

// Middleware
app.use(express.json());

// Routelar
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} da ishlayapti`);
});