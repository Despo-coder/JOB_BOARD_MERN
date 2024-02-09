import React, { useEffect, useState } from 'react'
import FormTemplate from '../components/FormTemplate'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setUserCredentials } from '../slices/authenticationSlice';
import Loader from '../components/Loader';

const RegisterScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [fname, setFname] = useState('');

const {userInfo} = useSelector(state => state.authenticate)
const [register, {isLoading}] = useRegisterMutation()
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()
const {search}  = location
const params = new URLSearchParams(search)
const redirectTo = params.get('redirect') || '/'



useEffect(() => {
    if (userInfo) {
        navigate(redirectTo)
    }
}, [userInfo, redirectTo, navigate])


    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const data = await register({email, password, fname}).unwrap()
            dispatch(setUserCredentials({...data}))
            navigate('/')
            console.log('Register')
        } catch (error) {
            
        }
    }
  return (
    <div>
        <FormTemplate>
<h1> Register Screen</h1>
<form onSubmit={handleSubmit}>
          <div className="mb-4">
           
            <input 
                type="name" 
                name="name" 
                id="name" 
                placeholder="Full Name" 
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
             <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
         
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          </div>
          <div className="mb-6">
           
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
             <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          </div>
          <div className="flex items-center justify-between">
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit" disabled={isLoading}
                
            >
              Register
            </button>
            </div>
            {isLoading && <Loader/>}
            </form>
        <div className="text-center text-sm text-gray-500">
            Already have an account? {'   '}
            <Link 
                to={redirectTo ? `/login?redirect=${redirectTo}` : '/register'}
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Login
            </Link>
            </div>
        </FormTemplate>
     
    </div>
  )
}

export default RegisterScreen
