import { assets } from "../assets/assets";
import Brands from "../components/Brands";

const About = () => {
  return (
    <div className="py-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        About Our Store
      </h1>

      {/* Description */}
      <p className="text-lg mt-4 text-center max-w-4xl mx-auto text-gray-600">
        Welcome to <span className="text-secondary font-semibold">ShopSmart</span> — your one-stop online store for
        everything you need! From electronics and fashion to home essentials and
        accessories, we bring quality products right to your doorstep. Our goal
        is to make shopping simple, affordable, and enjoyable for everyone.
        Convallis eget. In hac habitasse platea dictumst. Ut efficitur sem nibh,
        nec molestie sapien finibus eget. Duis dignissim convallis est, ut
        finibus nisi tempor maximus.
      </p>

      {/* Deal of the Day Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-lg overflow-hidden">
        <div className="flex-1">
          <img
            src={assets.about_hero}
            alt="Deal of the Day"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 p-6 md:p-10 text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold">Deal of the Day</h1>
          <p className="text-gray-300">
            Save big on our top-selling products! Enjoy exclusive discounts on
            electronics, clothing, accessories, and more. Limited-time offers
            updated daily — don’t miss out!
          </p>
          <button className="bg-secondary hover:bg-primary transition text-white px-6 py-2 rounded-full w-fit mx-auto md:mx-0">
            Shop Now
          </button>
        </div>
      </div>

      {/* Brand Section */}
      <Brands />
    </div>
  );
};

export default About;
