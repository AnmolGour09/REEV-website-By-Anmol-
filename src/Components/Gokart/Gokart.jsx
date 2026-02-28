import React, { useEffect, useState, useRef } from "react"; 
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Gokart.css";
import Footer from "../Footer/Footer.jsx";
import MultiCarousel from "../MoviesCarousel/MoviesCarousel.jsx";

// Images
import img1 from "/season1.jpg";
import img2 from "/season 2.jpg";
import img3 from "/season3.png";
import img4 from "/Picture11.jpg";

  export default function GoKart() {
    return (
      <div className="gokart-container">
        <div className="flex-grow">
          <Anmol />
      <About />
      <MultiCarousel />
      <Timeline />
    </div>
    <Footer />
      </div>
    );
  }

  function Anmol(){
    const [animate, setAnimate] = useState(false);
        const sectionRef = useRef(null);
      
        useEffect(() => {
          setAnimate(true);
        }, []);
        return (
      <main className="Ashish">
          {/* container 1 */}
          <section className="relative z-10">
            <div className=" mx-auto px-4 pt-[20%] sm:pt-[15%] md:pt-[1%] pb-[12%] md:pb-[5%]">
              <div className="text-center relative">
                <div className="Jointe">
                  <h2 className={`learn-mo-line ${animate ? "active" : ""}`}>
                    <span className="section-heading">About Gokart</span>
                  </h2>
                </div>
              </div>
            </div>
          </section>
    
          <hr className="bg-black border-b border-red-500" />
      </main>
        );

  }

  function About() {
    const [animate, setAnimate] = useState(false);
        const sectionRef = useRef(null);
      
        useEffect(() => {
          setAnimate(true);
        }, []);

    return (
      <main className="w-full bg-[#101010] min-h-screen pt-20 lg:pt-24" style={{ position: 'relative', zIndex: 1 }}>
          {/* container 1 */}
            
      <motion.section
        className="about"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image with fade + slide from left */}
        <motion.img
          src="/Gokart.png"
          alt="REEV"
          className="about-img"
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05, filter: "brightness(110%)" }}
        />

        {/* Text with fade + slide from right */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="about-title">
            About Gokart
            {/* underline effect same as in Reev2 */}
            <motion.div
              className="about-underline"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
            />
          </h2>
          <p>
            Resonance Racing is a Collegiate Motorsports club of AISSMS COE which
            provides an opportunity for students to pursue their passion for
            automobile engineering. GO KART team is a subsidiary of Resonance
            Racing which was started in 2014 with the aim of competing in National
            level Go Karting Championships. Resonance Racing Go-kart is highly
            backed by college administration, and experienced faculty advisers.
            Team consists of highly technical and non-technical skilled members
            who together in unison manufacture a state-of-the-art Champion
            Go-kart Vehicle.
          </p>
        </motion.div>
      </motion.section>
      </main>
    );
  }

  // function MultiCarousel() {
  //   const slides = [
  //     { img: img1, text: "Car 1" },
  //     { img: img2, text: "Car 2" },
  //     { img: img3, text: "Car 3" },
  //     { img: img4, text: "Car 4" },
  //   ];

  //   return (
  //     <div className="carousel-container">
  //       <Swiper
  //         slidesPerView={3}
  //         spaceBetween={20}
  //         loop={true}
  //         autoplay={{ delay: 2000 }}
  //         pagination={{ clickable: true }}
  //         modules={[Pagination, Autoplay]}
  //         breakpoints={{
  //           640: { slidesPerView: 1 },
  //           768: { slidesPerView: 2 },
  //           1024: { slidesPerView: 3 },
  //         }}
  //         style={{ padding: "20px 0" }}
  //       >
  //         {slides.map((slide, index) => (
  //           <SwiperSlide key={index}>
  //             <img
  //               src={slide.img}
  //               alt={slide.text}
  //               className="slide-img"
  //             />
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>
  //   );
  // }

  function Timeline() {
    const events = [
      {
        season: "YEAR 2025-2026",
        details: "Ketan sonawane (CAPTAIN)",
        image: "/season5.jpg",
      },
      {
        season: "YEAR 2024-2025",
        details: "Ketan sonawane (CAPTAIN)",
        image: "/season5.jpg",
      },
      {
        season: "YEAR 2023-2024",
        details: "Kaushal More (CAPTAIN)",
        image: "/season4.png",
      },
      {
        season: "YEAR 2022-2023",
        details: "Shubham Landage (CAPTAIN), Samarjeet Aherrao (VICE CAPTAIN)",
        image: "/season3.png",
      },
      {
        season: "YEAR 2019-2020",
        details: "Mukul Wadhokar (Captain)",
        image: "/season 2.jpg",
      },
      {
        season: "YEAR 2018-2019",
        details: "Launched REEV with innovative electric vehicle projects.",
        image: "/season1.jpg",
      },
    ];

    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scroll = (scrollTop / docHeight) * 100;
        setScrollPercent(scroll);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <section className="timeline relative">

        <div className="timeline-header">
          <h2>2014 Club inauguration</h2>
        </div>

        {/* Moving Ball */}
        <motion.div
          className="moving-ball"
          style={{ top: `${scrollPercent}%` }}
        ></motion.div>

        {events.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`timeline-item ${isEven ? "left" : "right"}`}
              initial={{ opacity: 0, y: 80, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Text Section */}
              <motion.div
                className="content"
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3>{event.season}</h3>
                <p>{event.details}</p>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="image-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={event.image}
                  alt={event.season}
                  className="timeline-img"
                  initial={{ filter: "brightness(50%)" }}
                  whileHover={{ filter: "brightness(110%)" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    );
  }
