import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div
      className="py-20 my-12 bg-[#1e1e2f] text-white"
      style={{
        backgroundImage: `url(${assets.footer_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-wrap justify-center items-start gap-12 px-6 md:px-12">

        {/* Brand Info */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src={assets.logo} alt="Store Logo" className="w-28 h-28 mb-4" />
          <h3 className="text-gray-300 leading-relaxed text-sm">
            Discover quality products at unbeatable prices. Your one-stop
            destination for fashion, electronics, home essentials, and more.
          </h3>
        </div>

        {/* Useful Pages */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold mb-2">Useful Links</h1>
          <Link to={"/"} className="hover:text-secondary">Home</Link>
          <Link to={"/shop"} className="hover:text-secondary">Shop</Link>
          <Link to={"/about"} className="hover:text-secondary">About</Link>
          <Link to={"/contact"} className="hover:text-secondary">Contact</Link>
        </div>

        {/* Help Center */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold mb-2">Customer Support</h1>
          <Link to={""} className="hover:text-secondary">Payment Options</Link>
          <Link to={""} className="hover:text-secondary">Shipping Info</Link>
          <Link to={""} className="hover:text-secondary">Returns & Refunds</Link>
          <Link to={""} className="hover:text-secondary">Track Order</Link>
        </div>

        {/* Company Info */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl font-semibold mb-2">Company</h1>
          <Link to={""} className="hover:text-secondary">Careers</Link>
          <Link to={""} className="hover:text-secondary">Privacy Policy</Link>
          <Link to={""} className="hover:text-secondary">Terms & Conditions</Link>
          <Link to={""} className="hover:text-secondary">Affiliate Program</Link>
        </div>

        {/* App Download */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl font-semibold">Download Our App</h1>
          <img src={assets.app_store} alt="App Store" className="w-36 cursor-pointer" />
          <img src={assets.play_store} alt="Play Store" className="w-36 cursor-pointer" />

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Link to={""}>
              <img src={assets.facebook_icon} alt="Facebook" className="w-6 hover:opacity-80" />
            </Link>
            <Link to={""}>
              <img src={assets.instagram_icon} alt="Instagram" className="w-6 hover:opacity-80" />
            </Link>
            <Link to={""}>
              <img src={assets.twitter_icon} alt="Twitter" className="w-6 hover:opacity-80" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Trendify Store. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
