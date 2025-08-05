const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const pensionRoutes = require('./routes/pension');

const app = express();
app.use(express.json());

app.use('/api/pension', pensionRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

module.exports = app;
