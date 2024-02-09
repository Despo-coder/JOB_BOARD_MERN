import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {  FaUserCircle } from 'react-icons/fa';
import { useSelector , useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authenticationSlice';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.authenticate)
    const [ApiLogout] = useLogoutMutation()

const toggleDropdown = () => {
  const dropdown = document.getElementById("dropdownDelay");
  if(dropdown.style.display === "none"){
dropdown.style.display = "block"
  }else{
    dropdown.style.display = "none"
  }
}
  


const handlelogout = async () => {
  
  try {
        await ApiLogout().unwrap()
        dispatch(logout())
      navigate('/login')
      const dropdown = document.getElementById("dropdownDelay"); 
      dropdown.style.display = "none"
    } catch (error) {
        console.log(error)
    }
}
  
    const NavToggle = ()=>{
    setOpen(!open)
    }

  return (
    <div className="container mx-auto flex flex-col p-6 lg:flex-row lg:mb-0">
    <div className='flex justify-between items-center w-full h-24 px-4 text-black'>
      <h1 className='w-full text-3xl font-semibold text-primary'>Side Hustle World</h1>
      
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        
        <li className='p-4'><Link to="/resources">Resources</Link></li>
        <li className='p-4'> <Link to="/about">About</Link></li>
        <li className='p-4'><Link to="/all">Hustles</Link></li>
       
        {userInfo ? <li className='p-4'>{userInfo.fname}</li> : (<button className='btn-accent btn btn-lg mt-3 text-sm'><Link to="/login">Login</Link></button>)}
        {userInfo ? <li className='p-4' id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" >
    
          <FaUserCircle size={20} className='cursor-pointer' onClick={toggleDropdown}/></li>: ''}
         
      </ul>
      <div id="dropdownDelay" className="z-10 hidden divide-y divide-gray-100 bg-white mt-32 text-center rounded-lg p-[-1] shadow w-1/3 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
      <li>
        <Link to='/profile' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
      </li>
      <li>
        <Link onClick={handlelogout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign Out</Link>
      </li>
      
    </ul>
</div> 

      <div onClick={NavToggle} className='block md:hidden'>
          {open ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={open ? 'fixed left-0 top-0 w-[70%] h-full z-40 border-r border-r-gray-900 text-white bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#4640DE] m-4'>Side Hustle World</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'><Link to="/about" onClick={()=>setOpen(false)}>About</Link></li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
          <li className='p-4'>Login/Sign Up</li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;

