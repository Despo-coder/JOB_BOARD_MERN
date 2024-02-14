import React from 'react'

import { FaSearchLocation} from 'react-icons/fa'


const Hero = () => {

  // const handleSearch = async (e) => {
  //   e.preventDefault()
   
  // }

  return (
    <section id='hero'>
      {/* Container for Image & Content */}
      <div className="container mx-auto flex flex-col p-6 lg:flex-row lg:mb-0">
{/* Content */}
<div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
  <h1 className='text-3xl text-black font-semibold text-center lg:text-6xl lg:text-left'>
    Discover <span className='text-accent'>Unlimited</span> Opportunities
    </h1>  
    <p className='max-w-md mx-auto text-lg text-center text-slate-700 lg:text-lg lg:text-left lg:mt-0 lg:mx-0'>
        Explore a world of opprtunities and effortlessly apply to all types of hustles/jobs that fit your skillset</p>
        <div className='flex flex-col space-y-10'>
        <form  className="relative mt-8 flex flex-col items-center gap-y-1 container mx-auto lg:flex-row lg:items-start lg:max-w-3xl">
        <div className='m-2'><FaSearchLocation /></div>
        <div className="relative">
    <select className="w-40 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500">
      <option value="">Category</option>
      
      <option value="job1">Side Hustle</option>
      <option value="job2">Wifi/Remote</option>
      <option value="job2">Part Time</option>
      <option value="job2">In Office</option>
      <option value="job2">Business Ideas</option>
    </select>
  </div>
  
 
  <div className="relative">

    <select className="w-40 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500">
    
      <option value="">Country</option>
      
      <option value="country1">Country 1</option>
      <option value="country2">Country 2</option>
     
    </select>
  </div>
  {/* <input type="text" placeholder="Search for jobs..." className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500" /> */}


<button type="submit" className="px-2 py-2 bg-blue-500 text-white rounded-r-md">Search</button>
</form>
</div>
</div>
{/* Image */}
<div className="relative mt-12">
<div className="absolute bottom-[-220px] left-[-10px] lg:left-[10px] lg:bottom-20 w-64 h-64 bg-blue-500 rounded-full lg:w-64 lg:h-64"></div>
</div>
 {/* Image */}
    <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2 overflow-hidden">
      <img src="./img/images/illustration-hero.svg" alt="" className="relative z-10 lg:top-24 xl:top-0" />
    </div>
      </div>
    </section>
  )
}

export default Hero
