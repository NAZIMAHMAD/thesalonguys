// src/App.jsx
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './component/Header'; // Assuming 'component' is a folder in the src directory
import './component/component.css';
import './component/responsive.css';
import Home from './component/Home';
import Footer from './component/Footer';
import Services from './component/Services';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import ScrollToTop from './component/ScrollToTop';
import About from './component/About';
import AOS from 'aos';
import 'aos/dist/aos.css';


// Initialize AOS with options
AOS.init({
  once: true, // Animate only once
});



const App = () => {
  return (
    <>



<ScrollToTop />

      <Header />


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />


      </Routes>


      
      <Footer />


    </>
  );
};

export default App;
