import express from 'express';
import JobModel from '../models/JobsModel.js';
import asyncHandler from '../middleware/asyncHandler.js';




const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const jobs = await JobModel.find({});
    res.json(jobs);
  }));
  
  router.get('/:id', asyncHandler(async(req, res) => {
    const job = await JobModel.findById(req.params.id);

    if(job){
      res.json(job);
    } else {
      res.status(404);
      throw new Error('Job not found');
    }
   
  }));

  router.get('/search', asyncHandler(async(req, res) => {
    try {
       const {remote_work, location} = req.query;
       const query = {};
         if(remote_work){
            query.remote_work = remote_work;
         }
            if(location){
                query.location = location
            }
            const jobs = await JobModel.find(query);
            res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }))




export default router;