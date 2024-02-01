import React from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../jobs'

const JobDetailScreen = () => {
    const { id:jobId } = useParams()
    const job = jobs.find(job =>{
        return job.id === Number(jobId)
    } )
   
   
  return (
    <>
    <div className='flex justify-center items-center w-full h-44 px-4 text-black bg-slate-100 rounded-md '>
    <div className='container mx-auto mb-6 mt-8'>
      <div className='flex justify-center mx-auto mt-4 mb-3 items-center text-black gap-2'>
           <div>
           <h1 className='w-full text-3xl text-center font-semibold text-black'>{job.jobTitle}</h1>
            </div> 
            <div>{job.fullTime ? <span className='border-2 border-slate-400 text-slate-800 p-1 rounded-md'>Fulltime</span>:<span className=' border-2 border-pink-300 p-1 text-pink-400 rounded-md'>PartTime</span>}</div>
      </div>
      <div className='w-full mb-12 text-center'>{job.payPackage}  </div>
    </div>
    
    </div>
    <div className=" container mx-auto mt-20 grid grid-cols-2 gap-4 ">

<div className='gap-x-4'>
  <img src="/img/images/logo-firefox.svg" className="h-10 w-10"  alt={job.jobTitle} />

  <h5 className="text-lg font-bold mt-2">{job.offeringCompany}</h5>

  <p className='mt-2'>{job.location}</p>

  <p className='mt-2'>{job.offeringCompanyWebsite}</p>

  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Learn More</button>

  <p className='mt-2'>{job.sector}</p>
</div>

<div>
  <h1 className="text-2xl font-semibold text-black">About the Job</h1>
  <p>{job.detailedInfo}</p>
  <div className='mt-12'>
    <h2 className="text-2xl font-semibold text-black">Resources</h2>
    <div className='w-2/3 border-2 p-1 overflow-auto text-center rounded-md'>
      <h5>Twitter</h5>
        <p>{job.socialMedia.twitter}</p>
  </div>
    <div className='w-2/3 border-2 p-1 overflow-auto text-center rounded-md mt-1'>
      <h5>Twitter</h5>
        <p>{job.socialMedia.twitter}</p> 
  </div>
    <div className='w-2/3 border-2 p-1 overflow-auto text-center rounded-md mt-1'>
      <h5>Twitter</h5>
        <p>{job.socialMedia.twitter}</p>
  </div>
</div>
  
</div>

</div>
<button className= "container ml-2 mx-auto w-1/6 bg-blue-500 text-white px-1 py-1 rounded mt-2">Back</button>
    </>
  );




}

export default JobDetailScreen
