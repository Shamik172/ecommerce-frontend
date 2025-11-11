import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Heart, ShoppingBag, UserRound } from "lucide-react";
import { AppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const { navigate, user, setUser, cart, favorite, axios } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-secondary border-b-2 border-secondary font-semibold"
      : "hover:text-secondary";

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/auth/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(false);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm transition-all">
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="w-36 h-auto object-contain" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/shop" className={isActive("/shop")}>
          Shop
        </Link>
        <Link to="/about" className={isActive("/about")}>
          About
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          Contact
        </Link>

        <div className="flex items-center gap-6 ml-6">
          {/* Wishlist */}
          <div onClick={() => navigate("/wishlist")} className="relative cursor-pointer">
            <Heart className="w-6 h-6 hover:text-secondary transition" />
            {favorite?.length > 0 && (
              <span className="absolute -top-2 -right-3 text-xs text-white bg-secondary w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {favorite.length}
              </span>
            )}
          </div>

          {/* Cart */}
          <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
            <ShoppingBag className="w-6 h-6 hover:text-secondary transition" />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>

          {/* User / Login */}
          {user ? (
            <div className="relative group">
              <img
                src={assets.profile_pic}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
              />
              <div className="absolute right-0 mt-3 w-44 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                <ul className="text-gray-700 text-sm">
                  <li
                    onClick={() => navigate("/my-orders")}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-t-md"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={logout}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-b-md"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-all"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="md:hidden focus:outline-none"
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="2" rx="1" fill="#333" />
          <rect y="8" width="24" height="2" rx="1" fill="#333" />
          <rect y="16" width="24" height="2" rx="1" fill="#333" />
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md py-5 flex flex-col items-start gap-4 px-6 text-gray-700 text-sm font-medium md:hidden z-50">
          <Link onClick={() => setOpen(false)} to="/" className={isActive("/")}>
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/shop" className={isActive("/shop")}>
            Shop
          </Link>
          <Link onClick={() => setOpen(false)} to="/about" className={isActive("/about")}>
            About
          </Link>
          <Link onClick={() => setOpen(false)} to="/contact" className={isActive("/contact")}>
            Contact
          </Link>
          <div className="flex items-center gap-4">
            <ShoppingBag
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                navigate("/cart");
                setOpen(false);
              }}
            />
            <Heart
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                navigate("/wishlist");
                setOpen(false);
              }}
            />
            {user ? (
              <UserRound
                className="w-5 h-5 cursor-pointer"
                onClick={() => navigate("/my-orders")}
              />
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
                className="cursor-pointer px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-all"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
