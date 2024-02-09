import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import JobScreen from './screens/JobScreen';
import JobDetailScreen from './screens/JobDetailScreen';
import ResourceScreen from './screens/ResourceScreen';
import AllHustles from './screens/AllHustles';
import JobSearchResults from './screens/JobSearchResults';
import store from './store';
import {Provider} from "react-redux";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './screens/ProfileScreen';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
         <Route index={true} path='/' element={<HomeScreen />} />
   
          <Route  path='/about' element={<JobScreen />} />
          <Route  path='/login' element={<LoginScreen />} />
          <Route  path='/register' element={<RegisterScreen />} />
          <Route  path='/jobs/:id' element={<JobDetailScreen />} />
          <Route  path='/resources' element={<ResourceScreen />} />
          <Route  path='/all' element={<AllHustles />} />
          <Route path='' element={<PrivateRoute/>}>
    <Route path="/search-results" element={<JobSearchResults />} />
    <Route path="/profile" element={<ProfileScreen/>} />
       </Route>
    </Route>
  ),  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);

