import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { navigate, currency, addToCart } = useContext(AppContext);

  return (
    <div className="w-[250px] h-[380px] rounded-xl bg-[#FAFAFA] p-[20px] hover:border hover:border-secondary hover:transform hover:scale-105 transition-all ease-in-out duration-300 shadow-sm">
      {/* Product Image */}
      <Link to={`/product/${product._id}`} className="cursor-pointer">
        <div className="flex items-center justify-center h-[200px]">
          <img
            src={`http://localhost:4000/uploads/${product.images[0]}`}
            alt={product.name || "Product Image"}
            className="max-h-full object-contain"
          />
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="flex items-center justify-center mt-3 w-full py-2 bg-secondary text-white font-medium cursor-pointer rounded-md hover:bg-primary transition-all"
      >
        <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
      </button>

      <hr className="w-full my-3" />

      {/* Product Info */}
      <div className="text-center">
        <p className="text-secondary text-sm font-normal uppercase tracking-wide">
          {product.category?.name || "Category"}
        </p>
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name || "Product Name"}
        </h2>
      </div>

      {/* Price Section */}
      <div className="flex items-center justify-center gap-4 mt-2">
        {product.price && (
          <p className="text-base font-normal line-through text-gray-400">
            {currency}
            {product.price}
          </p>
        )}
        <p className="text-lg font-semibold text-primary">
          {currency}
          {product.offerPrice || product.price}
        </p>
      </div>

      {/* Optional: Stock / Label */}
      {product.stock <= 0 ? (
        <p className="text-red-500 text-xs text-center mt-2 font-medium">
          Out of Stock
        </p>
      ) : (
        <p className="text-green-600 text-xs text-center mt-2 font-medium">
          In Stock
        </p>
      )}
    </div>
  );
};

export default ProductCard;
