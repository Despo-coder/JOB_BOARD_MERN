import {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormTemplate from '../components/FormTemplate'
import Loader from '../components/Loader'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setUserCredentials } from '../slices/authenticationSlice'
import {toast} from 'react-toastify'


const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    
    const [login, {isLoading}] = useLoginMutation()
    const {userInfo} = useSelector(state => state.authenticate)

    const {search}  = location
    const params = new URLSearchParams(search)
    const redirectTo = params.get('redirect') || '/'

useEffect(() => {
    if (userInfo) {
        navigate(redirectTo)
    }
}, [userInfo, redirectTo, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           const {data} = await login({email, password})
           console.log(data)
           dispatch(setUserCredentials({...data}))
           navigate(redirectTo)
           toast.success('Login Successful')
          
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }

  return (
    <div>
      <FormTemplate>
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Enter Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit" disabled={isLoading}
            >
              Sign In
            </button>
            </div>
            {isLoading && <Loader/>}
            </form>
        <div className="text-center text-sm text-gray-500">
            Don't have an account? {'   '}
            <Link 
                to={redirectTo ? `/register?redirect=${redirectTo}` : '/register'}
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Register
            </Link>
            </div>
          </FormTemplate>
    </div>
 
  )
}

export default LoginScreen
