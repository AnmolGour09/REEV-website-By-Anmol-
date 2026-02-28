import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon

const reviews = [
  {
    name: "Omkar Tigote",
    position: "Team Captain",
      image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    linkedin: "https://www.linkedin.com/in/omkar-tigote-a207892a8/"
  },
  {
    name: "DARSHAK KAMANI",
    position: "Driver and powertrain engineer ",
         image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    linkedin: "https://www.linkedin.com/in/sarah-johnson"
  },
  {
    name: "Dr. Sarah Johnson",
    position: "Head of Engineering, Tesla",
    review:
      "REEV's innovative approach to electric vehicle technology is truly remarkable. Their commitment to sustainability and performance sets them apart in the industry.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    linkedin: "https://www.linkedin.com/in/sarah-johnson"
  },
  {
    name: "Michael Chen",
    position: "Racing Engineer, Formula E",
    review:
      "Working with REEV has been an incredible experience. Their attention to detail and passion for electric motorsports is unmatched.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    linkedin: "https://www.linkedin.com/in/michael-chen"
  },
  {
    name: "Emily Rodriguez",
    position: "Automotive Journalist",
    review:
      "REEV represents the future of automotive technology. Their vehicles combine cutting-edge innovation with environmental responsibility.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    linkedin: "https://www.linkedin.com/in/emily-rodriguez"
  },
  {
    name: "Professor David Kim",
    position: "MIT Energy Systems Lab",
    review:
      "The research collaboration with REEV has yielded breakthrough results in battery efficiency and electric motor optimization.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    linkedin: "https://www.linkedin.com/in/david-kim"
  }
];

const ReviewCarousel = () => {
  return (
    <div className="w-full px-4 py-10 relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/30",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-red-600"
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="review-swiper !pb-12"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <div className="bg-white/10 rounded-xl w-[27rem] h-[24rem] p-10 border-2 border-red-600/20 hover:border-red-600 transition-colors duration-300 relative">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-red-600"
                  />
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">
                    {review.name}
                  </h3>
                  <p className="text-red-600 text-sm mb-6 font-medium">
                    {review.position}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    "{review.review}"
                  </p>
                </div>

                {/* LinkedIn Button */}
                <a
                  href={review.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                  title={`Connect with ${review.name} on LinkedIn`}
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
        <div className="swiper-button-next !text-white hover:!text-red-600 !w-12 !h-12 !bg-black/50 !rounded-full after:!text-lg"></div>
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;