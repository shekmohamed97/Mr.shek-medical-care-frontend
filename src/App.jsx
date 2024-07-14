import React, { useContext, useEffect } from 'react';
import   "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
import AboutUs from './Pages/AboutUs';
import Register from './Pages/Register';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Companents/Navbar';
import { Context } from './main';
import axios from 'axios';
import Login from './Pages/Login';

const App = () => {

  const {isAthendicated,setIsAthendicated,setUser}=useContext(Context);

  useEffect(()=>{
    const fetchUser=async()=>{
      try {
        const response=await axios.get(
          "https://back-end-code-fm9z.onrender.com/api/v1.1/userrigister/patient/me",
          {
            withCredentials:true
          }
        );
        setIsAthendicated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAthendicated(false);
        setUser({});
      }
    };
    fetchUser();
  },[isAthendicated]);

  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
        <ToastContainer position="top-center"/>
      </Router>
    </>
  );
};

export default App;