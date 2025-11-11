import { assets } from "../assets/assets";
import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* --- Offer Card 1 --- */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#F3F4F6] flex flex-col md:flex-row gap-5 items-center justify-between p-6 rounded-2xl shadow-sm"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-primary text-2xl font-bold uppercase">
              Exclusive Tech Deals
            </h1>
            <h2 className="text-2xl font-semibold text-secondary">
              Save 20% on Laptops & Accessories
            </h2>
            <button className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer">
              Shop Now
            </button>
          </div>
          <img
            src={assets.laptop_offer}
            alt="Laptop Offer"
            className="w-1/2 md:w-[280px] object-contain"
          />
        </motion.div>

        {/* --- Offer Card 2 --- */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#E8F5FF] flex flex-col md:flex-row gap-5 items-center justify-between p-6 rounded-2xl shadow-sm"
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-primary text-2xl font-bold uppercase">
              Limited Time Offer
            </h1>
            <h2 className="text-2xl font-semibold text-secondary">
              Flat 15% Off on Smart Watches
            </h2>
            <button className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer">
              Explore Now
            </button>
          </div>
          <img
            src={assets.smartwatch_offer}
            alt="Smart Watch Offer"
            className="w-1/2 md:w-[260px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
