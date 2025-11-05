// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Health check
app.get('/', (_, res) => res.json({ status: 'ok', message: 'Student Project Tracker backend running' }));

// Connect using async/await for clarity
(async () => {
  try {
    if (!MONGO_URI) throw new Error('MONGO_URI not found in .env file');
    
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`✅ Connected to MongoDB: ${conn.connection.name} (${conn.connection.host})`);
    
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error(`❌ MongoDB connection failed: ${err.message}`);
    process.exit(1);
  }
})();
