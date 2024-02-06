import asyncHandler from "../middleware/asyncHandler.js";
import JobModel from "../models/JobsModel.js";


//Resposibility: Fetch All Jobs from the DB
//Route: GET /api/jobs
//Access: Public
const getJobs = asyncHandler(async (req, res) => {
    const jobs = await JobModel.find({});
    res.json(jobs);
})


//Resposibility: Fetch Jobs by ID from the DB
//Route: GET /api/jobs/:id
//Access: Public
const getJobById = asyncHandler(async (req, res) => {
    const job = await JobModel.findById(req.params.id);
     
    if(job){
        
      return res.json(job);
    } else {
      res.status(404);
      throw new Error('Job not found');
    }
})

export {getJobs, getJobById};