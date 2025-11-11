import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Category = () => {
  const { categoriesData } = useContext(AppContext);

  // Softer, premium color palette
  const colors = [
    "bg-blue-200",
    "bg-rose-200",
    "bg-indigo-200",
    "bg-emerald-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-orange-200",
    "bg-teal-200",
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex items-center">
        <h2 className="max-w-lg text-lg font-medium tracking-wide text-gray-700">
          Categories
        </h2>
        <div className="ml-2 w-20 flex border-b-2 border-secondary"></div>
      </div>
      <h2 className="mt-4 text-secondary font-extrabold text-3xl">
        Shop by Collection
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={6}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full my-8"
      >
        {categoriesData.map((category, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.4 }}
              className={`w-[130px] md:w-[150px] h-[170px] rounded-xl ${colors[i % colors.length]} flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 shadow-sm`}
            >
              <img
                src={`http://localhost:4000/uploads/${category.image}`}
                alt={category.name}
                className="w-24 h-24 object-contain mb-2"
              />
              <h3 className="text-base font-semibold text-gray-800 text-center">
                {category.name}
              </h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
