import { motion } from "motion/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Blogs = () => {
  const { blogsData } = useContext(AppContext);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {blogsData.map((item, i) => (
          <div key={i}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-2xl shadow-md"
              />
            </motion.div>

            <div className="flex items-center my-4">
              <h2 className="max-w-lg text-sm text-gray-500 font-medium">{item.date}</h2>
              <div className="ml-2 w-20 flex border-b-2 border-secondary"></div>
            </div>

            <h1 className="text-lg font-bold text-gray-800 hover:text-secondary cursor-pointer transition-colors duration-300">
              {item.title}
            </h1>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>

            <button className="bg-secondary text-white px-6 py-2 rounded-lg cursor-pointer mt-4 hover:bg-secondary/80 transition-all duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
