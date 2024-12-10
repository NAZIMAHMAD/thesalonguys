import React from 'react'
import logo from '../assets/logo1.jpg'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";









const footer = () => {






  return (
    <>
     {/* footer section */}

<footer className='footer_section'>


<div className='footer_section_child'>


<div className='footer_section_child_card footer_section_child_card1'>
<img src="https://www.thesalonguys.in/wp-content/themes/the_salon/images/logo-alternate.png" alt="the jawed habib salon in jehanabad" />

<p>

salon guys, Railway Station Road, Nearest, Sabji Mandi, Ujala Colony, Jehanabad, Bihar 804408
</p>

</div>

<div className='footer_section_child_card'>
<h3>quick link</h3>

<ul>
<li><FaHome /><NavLink to="/" className="menu">
home</NavLink></li>
<li><MdDesignServices /><NavLink to="/Services" className="menu">
services</NavLink></li>
<li><GrGallery /><NavLink to="/Gallery" className="menu">
gallery</NavLink></li>
<li><IoIosContact /><NavLink to="/Contact" className="menu">
contact us</NavLink></li>
<li><NavLink to="tel:+91 8210293437">book appointment</NavLink></li>

</ul>
</div>

<div className='footer_section_child_card social_box'>
<h3>follow us</h3>

<div className='icon_box'>

<NavLink to="https://www.facebook.com/Thesalonguysjay?mibextid=JRoKGi" >
  <FaFacebook  className='social_icon'/>
  </NavLink>

<NavLink to="https://www.instagram.com/thesalonguysofficial_?utm_source=qr&igsh=YXRwYm1tcXgxejF6" >
<FaInstagramSquare className='social_icon'/>
  </NavLink>


<NavLink to="https://wa.me/8210293437" >
<FaWhatsappSquare className='social_icon'/>
  </NavLink>




</div>



</div>

</div>

</footer>

<section className='subfooter_section'>

<p> @ 2024 copyright reserved. designed and developed by <NavLink to="https://www.nazimtech.cloud/" >NTcodex systems.</NavLink> </p>

</section>

 
    </>
  )
}

export default footer
