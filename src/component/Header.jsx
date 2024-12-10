import React, { useState } from 'react'
import logo from '../assets/logo1.jpg'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";




const Header = () => {
 


const toggle = () =>
{
document.getElementsByClassName("navbar_list")[0].style.display="block";
}


const cut = () =>
  {
  document.getElementsByClassName("navbar_list")[0].style.display="none";
  }

  
   // Function to determine if the device is mobile
  const isMobile = () => window.innerWidth <= 768;

  // Function to handle click event
  const handleClick = (e) => {
    if (isMobile()) {
      // Hide navbar on mobile when a link is clicked
      document.getElementById('navbar').style.display = 'none';
    }
  };


  return (
   <>
   
   <div className='subheader'>


<div className='subheader_child'>


<div className='subheader_child_left'>
<NavLink to="https://www.facebook.com/Thesalonguysjay?mibextid=JRoKGi"><FaFacebook className='social_icon1'/>
</NavLink>

<NavLink to="https://www.instagram.com/thesalonguysofficial_?utm_source=qr&igsh=YXRwYm1tcXgxejF6"><AiFillInstagram className='social_icon1'/>
</NavLink>

<NavLink to="https://wa.me/8210293437"><IoLogoWhatsapp className='social_icon1'/>
</NavLink>


</div>

<div className='subheader_child_left'>
<NavLink to="tel:+91 8210293437">
      Call me now : +91 8210293437
    </NavLink>

</div>


</div>
 
   </div>
  
   
   <header>
      <div className='child_header'>
        <div className='logo_box'>
          <img src="https://www.thesalonguys.in/wp-content/themes/the_salon/images/logo-alternate.png" alt='header logo' />
        </div>
        
        <HiMenuAlt3 className='menu_icon' onClick={toggle} />
        <nav className="navbar_list" id="navbar">
        <HiMiniXMark className='xmark' onClick={handleClick}/>

          <li><NavLink exact to="/" onClick={handleClick}>home</NavLink></li>
          <li><NavLink to="/About" onClick={handleClick}>about</NavLink></li>

          <li><NavLink to="/Services" onClick={handleClick}>services</NavLink></li>
          <li><NavLink to="/Gallery" onClick={handleClick} >gallery</NavLink></li>
          <li><NavLink to="/Contact" onClick={handleClick}>contact us</NavLink></li>

          <li>
          <NavLink className='header_btn1' to="tel:+91 8809962475">book the appointment</NavLink>          </li>
        </nav>

        <NavLink className='header_btn' to="tel:+91 8809962475">book the appointment</NavLink>
      </div>
    </header>

    </>
  );
};


export default Header
