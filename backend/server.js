import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './configurations/db.js';
import jobRoutes from './routes/jobRoutes.js';

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready...');
})

app.use('/api/jobs', jobRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});