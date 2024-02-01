import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import jobs from './data/jobs.js';

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready...');
})

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/api/jobs/:id', (req, res) => {
  const job = jobs.find((j) => j.id === Number(req.params.id));
  res.json(job);
 
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});