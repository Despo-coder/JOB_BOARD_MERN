import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const NavToggle = ()=>{
    setOpen(!open)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 text-black'>
      <h1 className='w-full text-3xl font-bold text-[#4640DE]'>Hustle World</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        
        <li className='p-4'>Resources</li>
        <li className='p-4'> <Link to="/about">About</Link></li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>Login/Sign Up  </li>

      </ul>
      <div onClick={NavToggle} className='block md:hidden'>
          {open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={open ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 text-white bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#4640DE] m-4'>Hustle World</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
         
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
          <li className='p-4'>Login/Sign Up</li>
      </ul>
    </div>
  );
};

export default Navbar;