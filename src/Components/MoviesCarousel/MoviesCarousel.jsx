  import React, { useRef, useState, useEffect } from "react";
  import { motion } from "motion/react";
  import "./MoviesCarousel.css";
  import img1 from "/season1.jpg";
  import img2 from "/season 2.jpg";
  import img3 from "/season3.png";
  import img4 from "/Picture11.jpg";
  const movies = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];

  const MoviesCarousel = () => {
    const [animate, setAnimate] = useState(false);
        const sectionRef = useRef(null);
      
        useEffect(() => {
          setAnimate(true);
        }, []);
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
  
    const scroll = (index) => {
      const container = containerRef.current;
      if (container) {
        const scrollAmount = container.clientWidth;
        container.scrollTo({
          left: index * scrollAmount,
          behavior: "smooth",
        });
      }
      setCurrentIndex(index);
    };
  
    // Auto-scroll
    const startAutoScroll = () => {
      if (intervalRef.current) return; // prevent duplicate intervals
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % movies.length;
          scroll(newIndex);
          return newIndex;
        });
      }, 2500); // 2.5s interval
    };
  
    const stopAutoScroll = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  
    useEffect(() => {
      startAutoScroll();
      return () => stopAutoScroll();
    }, []);
  
    return (
      
      <div className="movies-list" 
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
      onTouchStart={stopAutoScroll}
      onTouchEnd={startAutoScroll}
      >
        <div className="card-container" ref={containerRef}>
          {movies.map((m, idx) => (
            <div className="card" key={idx}>
              <div className="card-img-blur-wrapper">
                <img src={m.img} alt={m.name} className="" />
              </div>
              
            </div>
          ))}
        </div>

        {/* Circle Indicators */}
        <div className="indicator-container">
          {movies.map((_, idx) => (
            <div
              key={idx}
              className={`indicator ${idx === currentIndex ? "active" : ""}`}
              onClick={() => scroll(idx)}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  export default MoviesCarousel;
