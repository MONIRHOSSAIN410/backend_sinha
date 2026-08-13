import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import dns from "dns"





dotenv.config();


dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Muldhon API is running' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`);
});