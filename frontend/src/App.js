// App.js
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
    </div>
  );
}

export default App;
