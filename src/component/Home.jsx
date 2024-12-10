import React, { useState, useEffect } from 'react';
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h3 from '../assets/h3.jpg';
import h4 from '../assets/h4.jpg';
import h5 from '../assets/h5.jpg';
import h6 from '../assets/h6.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';













const Home = () => {

  // State to manage form input values
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [hairDesign, setHairDesign] = useState('');
  const [date, setDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Construct the message to be sent via WhatsApp
    const Alert = "i am very excited to join with for services, please confirm below my details ?";
    const message = `${Alert}%0A %0AName: ${name}%0AContact Number: ${contactNumber}%0AHair Design: ${hairDesign}%0ADate: ${date}`;
    const phoneNumber = '8210293437'; // Replace with your WhatsApp phone number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(whatsappURL, '_blank');
  };



  const [currentSlide, setCurrentSlide] = useState(0);


  const images = [


h1,

h2,

h3,

h4,

h5,


h6




   



    

  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Set up the interval to change slides every 5 seconds
    const intervalId = setInterval(nextSlide, 5000);
    
    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSlide]); // Dependency on currentSlide is important to ensure interval is updated


  return (
    <>

      <Helmet>

        <title>Best Salon in jehanabad,arwal,gaya | home salon services in jehanabad,arwal,gaya | salon in jehanabad | best salon near me  | Luxury Salon in jehanabad | premium salon in jehanabad | the salon guys in jehanabad</title>
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
        <link rel="canonical" href="https://thesalonguys.site/" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": " salon ",
              "name": "the salon guys  in jehanabad",
              "url": "https://thesalonguys.site/",
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


      <div className='hero_section' >

        <div className='slider'>
          <div className='slides' style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className='slide'>


                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className='hero_btn'>
            <button className='prev' onClick={prevSlide} ><HiChevronLeft />
            </button>

            <button className='next' onClick={nextSlide}><HiChevronRight />
            </button>

          </div>

        </div>

      </div>




      {/* about us section */}

      <section className='about_section'>


        <div className='about_section_child'>



          <div className='about_section_child_left' data-aos="fade-down"
            data-aos-anchor-placement="top-center">



            <img src="https://coolmenshair.com/wp-content/uploads/barber-tools-9.jpg" alt="best salon in jehanabad" />


          </div>

          <div className='about_section_child_right'>

            <h1 data-aos="fade-up"
              data-aos-anchor-placement="top-center" >welcome to the salon guys </h1>

              <h2 >about premium salon & luxary salon in jehanabad,arwal,gaya</h2>
            <p data-aos="fade-up" data-aos-anchor-placement="top-center">In 17 may 2023, the salon guys started working with their first salon,Hair and Beauty, Wanting international exposure and education, , He started his independent salon, the salon guys Hair and Beauty in 2023. He has been the brand in jehanabad, arwal , gaya. He has been the official styling partner . He is also the only hairstylist to be features in Times and Forbes magazine. home salon services in jehanabad,arwal,gaya.</p>

            <NavLink to="/About" className="normal_btn" data-aos="fade-up" data-aos-anchor-placement="center-bottom">know more <IoIosArrowRoundForward />
            </NavLink>
          </div>

        </div>


      </section>







      <section className='service_section'>

        <div className='service_section_child service_section_child1'>

          <div className='service_section_child_title'>
            <h2 data-aos="fade-up" data-aos-anchor-placement="top-center">our offered services at the Best Salon in jehanabad,arwal,gaya  </h2>
            <p data-aos="fade-up" data-aos-anchor-placement="top-center">Discover the salon guys in Jehanabad, your top destination for premium beauty services. Enjoy expert facials, hair straightening, smoothening, and keratin treatments. Our skilled team offers luxurious hair spa treatments, top haircuts, nail extensions, nail art, and specialized bridal and party makeup. For exceptional beauty care and a lavish salon experience, visit in,  best salon in Jehanabad, arwal, gaya .</p>

          </div>


          <div className='service_section_child_content'>



            <div className='service_card' data-aos="fade-down" data-aos-anchor-placement="top-center">
              <img src={s1}
                         
 alt="Best facilal in jehanabad 
" />

              <p> hair cutting</p>
            </div>



            <div className='service_card' data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img src="                          http://www.hairfinder.com/tips/cutting2.jpg

                         
" alt="Best makup  in jehanabad
" />

              <p>under cutting</p>
            </div>

            <div className='service_card' data-aos="fade-down" data-aos-anchor-placement="top-center">
              <img src="
                          https://media1.popsugar-assets.com/files/thumbor/tdBUfVW5deWIiRIETUCDyZNmNa8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/11/04/644/n/1922153/tmp_QFvALd_17442867e5f691a7_GettyImages-1046733404.jpg
" alt="Best hair cutting in jehanabad
" />

              <p>hair wash</p>
            </div>



            <div className='service_card' data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img src={s4} alt="Best salon in jehanabad
" />

              <p>engagment makeup</p>
            </div>




            <div className='service_card' data-aos="fade-down" data-aos-anchor-placement="top-center">
              <img src="https://www.myrednails.com/wp-content/uploads/2019/12/image-principale-accueil-min.jpeg" alt="Best bridal makup in jehanabad" />
              <p>menicure</p>
            </div>


            <div className='service_card' data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img src={s3} alt="luxary salon in jehanabad" />
              <p>makeup</p>
            </div>

            <div className='service_card' data-aos="fade-down" data-aos-anchor-placement="top-center">
              <img src={s2} alt="skin renuvation in jehanabad" />
              <p>creative coloring</p>
            </div>




            <div className='service_card' data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img src="https://jawedhabib.com/wp-content/uploads/2023/01/Skin-Rejuvenation-min-768x469.jpg" alt="premium salon in jehanabad" />
              <p>skin renuvation</p>
            </div>

            <div className='service_card' data-aos="fade-down" data-aos-anchor-placement="top-center">
              <img src="https://jawedhabib.com/wp-content/uploads/2022/09/03d1235a6cc98952cc2d1e2d659f1eb1.png" alt="foot spa in jehanabad" />
              <p>foot spa</p>
            </div>

            <div>


            </div>

          </div>

          <NavLink className="card_btn" to="/Services" data-aos="fade-up" data-aos-anchor-placement="top-center">know more <IoIosArrowRoundForward />
          </NavLink>

        </div>

      </section>







      {/* belive jawed */}

      <section className='believe_section'>



        <div className='believe_section_child'>


          <div className='believe_section_child_left' data-aos="fade-up" data-aos-anchor-placement="top-center">

            <img src={s3} alt="best facial in jehanabad" />
          </div>

          <div className='believe_section_child_right'>


            <div className='believe_section_child_right_content'>
              <h3 data-aos="fade-down" data-aos-anchor-placement="top-center"> the World of Beauty at the home salon services in jehanabad,arwal,gaya </h3>
              <p data-aos="fade-up" data-aos-anchor-placement="top-center">Experience unparalleled beauty services at the salon guys, your top choice in jehanabad. Conveniently located, we offer a wide range of services including the best facial treatments, expert hair straightening, effective smoothening services, luxurious keratin treatments, and rejuvenating hair spa experiences
                ,Transform your look with our precision haircuts, exceptional nail extensions, and imaginative nail art designs. Our makeup artists specialize in flawless bridal makeup and captivating party makeup looks. Trust our skilled stylists for trendsetting hair styling that reflects your unique personality
              </p>

            </div>


          </div>

        </div>
      </section>


      <section className='beauty_section'>

        <div className='beauty_section_beauty_child'>


          <div className='beauty_section_beauty_child_left'>

            <h3 data-aos="fade-up" data-aos-anchor-placement="top-center">Why the salon guys Stands Out, and offer best hair cutting in jehanabad,arwal,gaya  </h3>
            <p data-aos="fade-down" data-aos-anchor-placement="top-center">Experience excellence at the salon guys  in Jehanabad, your premier destination for beauty services. Enjoy top-notch facials, precise hair straightening, smoothening solutions, luxurious keratin treatments, and rejuvenating hair spas. Our expert stylists offer tailored haircuts, nail extensions, creative nail art, and flawless bridal and party makeup. Visit us for a superior salon experience that exceeds expectations.</p>

          </div>


          <div className='beauty_section_beauty_child_right'>

            <div className='beauty_section_beauty_child_right_card' data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img src="https://www.myrednails.com/wp-content/uploads/2019/12/image-principale-accueil-min.jpeg" alt="the jawed habin salon in jehanabad" />
              <p>menicure</p>
            </div>

            <div className='beauty_section_beauty_child_right_card' data-aos="fade-down" data-aos-anchor-placement="top-center">
              <img src="https://jawedhabib.com/wp-content/uploads/2022/12/shutterstock_228991456-min-768x512.jpg" alt="bridal makeup in jehanabad" />
              <p>hair spa</p>
            </div>

            <div className='beauty_section_beauty_child_right_card' data-aos="fade-up" data-aos-anchor-placement="top-center">
              <img src="https://jawedhabib.com/wp-content/uploads/2023/01/Skin-Rejuvenation-min-768x469.jpg" alt="facial in jehanabad" />

              <p>skin rejuvation</p>
            </div>

            <div className='beauty_section_beauty_child_right_card' data-aos="fade-down" data-aos-anchor-placement="top-center">
              <img src="https://jawedhabib.com/wp-content/uploads/2022/09/03d1235a6cc98952cc2d1e2d659f1eb1.png" alt="straighting in jehanabad " />
              <p>foot spa</p>
            </div>

          </div>

        </div>


      </section>



{/* banner */}

<section className='service_price'>




<div className='service_price_child'>

<div className='service_price_child_left'>

<img src="https://pluspng.com/img-png/review-shades-it-cosmetics-holiday-2015-makeup-collection-best-selling-qvc-products-eyeshadow-palettes-lip-sets-1500.png" alt="" />
</div>

<div className='service_price_child_right'>

<h1>our list of work with price and 20% discount on each services </h1>
<ul>
  <li>hair cutting </li>
  <li>makeup  </li>
 


 
</ul>

<a href="">call me now</a>

</div>
   
</div>

</section>




      {/* Contact us form */}
      <section className='form_section'>
        <div className='form_section1'>
          <h3 data-aos="fade-down" data-aos-anchor-placement="top-center">Get in Touch</h3>
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

export default Home;
