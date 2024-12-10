import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  


 // State to manage form input values
 const [name, setName] = useState('');
 const [contactNumber, setContactNumber] = useState('');
 const [hairDesign, setHairDesign] = useState('');
 const [date, setDate] = useState('');

 // Handle form submission
 const handleSubmit = (e) => {
   e.preventDefault(); // Prevent default form submission behavior
 
   // Construct the message to be sent via WhatsApp
   const Alert = "can we connect for my hair cutting ? ";
   const message = `${Alert}%0A%0AName: ${name}%0AContact Number: ${contactNumber}%0AHair Design: ${hairDesign}%0ADate: ${date}`;
   const phoneNumber = '8210293437'; // Replace with your WhatsApp phone number
   const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

   // Open WhatsApp in a new tab with the pre-filled message
   window.open(whatsappURL, '_blank');
 };



  return (
    <>
       <Helmet>

<title>Contact us - Best Salon in jehanabad,arwal,gaya | home salon services in jehanabad,arwal,gaya | salon in jehanabad | best salon near me  | Luxury Salon in jehanabad | premium salon in jehanabad | the salon guys in jehanabad</title>
<meta name="description" content="Looking for the best salon near me. the salon guys in jehanabad is the ultimate choice, and home salon services in jehanabad, arwal, gaya, Known as the best salon in jehanabad,arwal,gaya. we offer the best facial, hair straightening, smoothening, and keratin in jehanabad. Enjoy the best hair spa in jehanabad, top-quality haircuts, and the best nail extensions and nail arts in jehanabad. Our salon excels in providing the best bridal and party makeup in jehanabad, as well as exceptional hair styling. For the best makeup artist in jehanabad, and premium salon in jehanabad, luxury salon in jehanabad, visit the salon guys Salon, your go-to destination for unparalleled beauty services in jehanabad, arwal, gaya." />

<meta name="keywords" content="Best salon near me,
Best salon in jehanabad,
Best facial in jehanabad,
Straightening in jehanabad,
Smoothening in jehanabad,
Keratin in jehanabad,
Best hair spa in jehanabad,
best salon near me ,
Best hair cut, 
Best nail extensions in jehanabad,
Best nail arts near me,
Best bridal makeup,
Best party makeup, 
Best hair styling, 
Best makeup artist in jehanabad,
Premium salon in jehanabad,
Luxury salon in jehanabad" />
<meta name="author" content="nazimtech" />
<link rel="canonical" href="https://thesalonguys.site/Contact" />
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": " salon ",
      "name": "the salon guys  in jehanabad",
      "url": "https://thesalonguys.site/Contact",
      "logo": "https://thesalonguys.site/assets/logo1.jpg",
      "description": "Looking for the best salon near me. the salon guys in jehanabad is the ultimate choice, and home salon services in jehanabad Known as the best salon in jehanabad,arwal,gaya. we offer the best facial, hair straightening, smoothening, and keratin in jehanabad. Enjoy the best hair spa in jehanabad, top-quality haircuts, and the best nail extensions and nail arts in jehanabad. Our salon excels in providing the best bridal and party makeup in jehanabad, as well as exceptional hair styling. For the best makeup artist in jehanabad, and premium salon in jehanabad, luxury salon in jehanabad, visit the salon guys Salon, your go-to destination for unparalleled beauty services in jehanabad, arwal, gaya.",
      "address": {
     "@type": "PostalAddress",
"streetAddress": " Railway Station Road, Nearest, Sabji Mandi, Ujala Colony, Jehanabad, Bihar 804408.",
"addressLocality": "jehanabad",
"addressRegion": "Bihar",
"postalCode": "804408",
"addressCountry": "India"
      },
      "contactPoint": {
         "@type": "ContactPoint",
"telephone": "+91 8210293437",
"contactType": "customer "
      },
      "sameAs": [
       "https://www.facebook.com/Thesalonguysjay?mibextid=JRoKGi",
"https://api.whatsapp.com/send/?phone=8210293437&text&type=phone_number&app_absent=0",
"https://www.instagram.com/thesalonguysofficial_?utm_source=qr&igsh=YXRwYm1tcXgxejF6"

      ]
    }
  `}
</script>
</Helmet>

      {/* Contact us form */}
      <section className='form_section'>
        <div className='form_section1'>
          <h3 data-aos="fade-up"
data-aos-anchor-placement="top-center">Get in Touch</h3>
        </div>

        <form className='form_section_child' onSubmit={handleSubmit}>
          <div className='user_box'>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='user_box'>
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              placeholder='Enter your contact number'
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className='user_box'>
            <label htmlFor="hairDesign">Write the Hair Design</label>
            <input
              type="text"
              id="hairDesign"
              placeholder='Select the design'
              value={hairDesign}
              onChange={(e) => setHairDesign(e.target.value)}
            />
          </div>

          <div className='user_box'>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className='form_button'>
            <input type="submit" value='Submit' />
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
