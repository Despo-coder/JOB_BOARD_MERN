import express from 'express';
import {getJobs, getJobById} from '../controllers/jobControllers.js';




const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById );

  // router.get('/search', asyncHandler(async(req, res) => {
  //   try {
  //      const {remote_work, location} = req.query;
  //      const query = {};
  //        if(remote_work){
  //           query.remote_work = remote_work;
  //        }
  //           if(location){
  //               query.location = location
  //           }
  //           const jobs = await JobModel.find(query);
  //           res.json(jobs);
  //   } catch (error) {
  //       res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }))




export default router;