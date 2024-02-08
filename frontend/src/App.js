import {ToastContainer} from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  
  const navigate = useLocation();

  // Function to check if the current route is the index route ("/")
  const isIndexRoute = () => navigate && navigate.pathname === '/';

  return (
    <div className="App">

      <Navbar />
      {isIndexRoute() && <Hero />}
      <Outlet />
      <ToastContainer position="top-center"
autoClose={2200}/>  
    </div>
  );
}

export default App;
