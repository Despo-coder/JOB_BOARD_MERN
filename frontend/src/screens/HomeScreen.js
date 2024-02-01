import React from 'react'
import jobs from '../jobs'
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    
      const first10Jobs = jobs.slice(0,10);
    
      return (
        <>
        
        <div className='container mx-auto mb-6 mt-4'>
        <h1 className='text-3xl text-black font-semibold text-center lg:text-2xl lg:text-left'>
   <span className='text-accent'>Featured</span> Opportunities
    </h1>  
        </div>
              
     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 drop-shadow-lg">
   
        {first10Jobs.map(job => (
          <div key={job.id} className="border border-secondary p-4 rounded">
             <Link to={`/job/${job.id}`}>
             <div className="flex justify-between items-center">
                <h6>{job.fullTime ? <span className=' border border-slate-200 text-slate-800 p-1 rounded-sm'>Fulltime</span>:<span className=' border border-pink-300 p-1 text-pink-400 rounded-sm'>PartTime</span>} </h6> 
                <span className="bg-blue-500 text-white px-2 py-1 rounded">{job.sector}</span>
             </div>
             
             <h2 className="font-bold text-xl">{job.jobTitle}</h2>
             
             <p className="text-gray-600">
                {job.jobSummary.slice(0,100)}...
             </p>
             
             <div className="flex justify-between items-center mt-4">
                <span className="font-bold">{job.payPackage}</span>
                <span className="text-gray-500">{job.location}</span>
             </div>
             </Link>
          </div>
        ))}
        
     </div>
    
     </>
      )
    }



export default HomeScreen


