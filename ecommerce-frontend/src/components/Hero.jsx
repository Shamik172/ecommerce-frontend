import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  const { navigate } = useContext(AppContext);

  const slides = [
    {
      title: "Shop the Latest Electronics & Gadgets",
      img: assets.hero_img1, // Replace with a laptop/phone/electronic hero image
      btn1: "SHOP NOW",
      btn2: "EXPLORE DEALS",
    },
    {
      title: "Trendy Fashion Collections for Everyone",
      img: assets.hero_img2, // Replace with clothing/fashion model image
      btn1: "DISCOVER NOW",
      btn2: "LIMITED OFFERS",
    },
    {
      title: "Home Essentials & Lifestyle Products",
      img: assets.hero_img3, // Replace with home decor image
      btn1: "START SHOPPING",
      btn2: "VIEW CATEGORIES",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-[#F1F3F6] h-[800px] bg-cover bg-center flex flex-col md:flex-row items-center justify-center gap-4 px-6 md:px-16"
            style={{ backgroundImage: `url(${assets.hero_bg_pattern})` }}
          >
            {/* Text Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
              <img src={assets.banner_icon} alt="" className="w-24 mb-4" />
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug">
                {slide.title}
              </h1>

              <div className="flex flex-wrap gap-5 mt-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => navigate("/shop")}
                  className="px-8 md:px-10 py-3 cursor-pointer bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all ease-in-out duration-300"
                >
                  {slide.btn1}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={() => navigate("/about")}
                  className="px-8 md:px-10 py-3 cursor-pointer bg-secondary text-white font-semibold rounded-full hover:bg-primary transition-all ease-in-out duration-300"
                >
                  {slide.btn2}
                </motion.button>
              </div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 3,
                type: "spring",
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="mt-10 md:mt-0"
            >
              <img
                src={slide.img}
                alt="Hero Slide"
                className="h-[300px] md:h-[550px] object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
