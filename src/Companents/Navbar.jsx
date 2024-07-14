import React, { useContext, useState } from 'react';
import { Context } from '../main';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {
    const [show,setShow]=useState(false);
    const{isAuthenticated,setIsAuthenticated}=useContext(Context)
    
    const handleLogout = async()=>{
        await axios.get(" https://back-end-code-fm9z.onrender.com/api/v1.1/userrigister/patient/logout",{
            withCredentials:true,
    })
    .then((res)=>{
        toast.success(res.data.message);
        setIsAuthenticated(false);
    })
    .catch((err)=>{
        toast.error(err.response.data.message);
    })
    };

    const navigateTo=useNavigate();

    const goToLogin=()=>{
        navigateTo("/login")
    }
    return (
        <>
        <nav className={"container"}>
            <div className='logo'>Mr.shek97care</div>
           <div className={show ? "navLinks Showenu" : "navLinks"}>
            <div className='links'>
                <Link to={"/"}>Home</Link>
                <Link to={"/appointment"}>APPOINTMENT</Link>
                <Link to={"/about"}>About Us</Link>
            </div>
            {isAuthenticated ?(
                <button className='logoutBtn btn' onClick={handleLogout}>
                  LOGOUT
                </button>
            ):(
            <button className='loginBtn btn' onClick={goToLogin}>
                LOGIN
            </button>)}
           </div>
           <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
        </nav>
            
        </>
    );
};

export default Navbar;