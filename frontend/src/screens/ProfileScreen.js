import React, { useEffect, useState } from 'react'
import FormTemplate from '../components/FormTemplate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { setUserCredentials } from '../slices/authenticationSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProfileScreen = () => {
    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { userInfo } = useSelector((state) => state.authenticate);
    const [updateProfile] = useProfileMutation();

    const dropdown = document.getElementById("dropdownDelay");
    dropdown.style.display = "none"

    useEffect(() => {
        setName(userInfo.fname);
        setEmail(userInfo.email);
      }, [userInfo.email, userInfo.name]);
      const dispatch = useDispatch();
console.log(fname, email)


      const submitHandler = async (e) => {
        e.preventDefault();
        console.log(fname)
        if (password !== confirmPassword) {
          toast.error('Passwords do not match');
        } else {
          try {
            const res = await updateProfile({
              _id: userInfo._id,
              fname:fname,
              email:email,
              password:password,
            }).unwrap();
            dispatch(setUserCredentials({ ...res }));
            toast.success('Profile updated successfully');
          } catch (err) {
            toast.error(err?.data?.message || err.error);
          }
        }
      };



  return (
    <FormTemplate>
      Profile Screen
      <form  onSubmit={submitHandler}>
        <div className="mb-4">
          <input
            type="name"
            name="name"
            id="name"
            value={fname}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
        {/* <ToastContainer />
          {loadingUpdateProfile && <Loader />} */}
      </form>
    </FormTemplate>
  )
}

export default ProfileScreen
