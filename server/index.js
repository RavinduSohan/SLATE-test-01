import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/stations.js';
import  connectDB  from './config/db.js'
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/stations', router)
  
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  });