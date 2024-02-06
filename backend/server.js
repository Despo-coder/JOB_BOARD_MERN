import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './configurations/db.js';
import jobRoutes from './routes/jobRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/customMiddleware.js';
 
connectDB();

const port = process.env.PORT || 5000;

const app = express();
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookie Parser Middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Server is ready...');
})



app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
  if(port){
    console.log(`Server is running on port ${port}`);
 }else{
  console.log('Server is running on default port 5000');
 }
});