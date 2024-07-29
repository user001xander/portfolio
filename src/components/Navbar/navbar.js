import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';



const Navbar = () => {
  return (
    <nav className="navbar">
        <img src="logo" alt="logo" class= "logo"/>
        <div className="homeMenu">
            <Link className="homeMenulist">Home</Link>
            <Link className="homeMenulist">About</Link>
            <Link className="homeMenulist">Services</Link>
            <Link className="homeMenulist">Clients</Link>
        </div>
        <button className="homeMenu">
            <img src="" alt="" className="homeMenuimg" />Contact Me</button>
    </nav>
  )
}

export default Navbar;
