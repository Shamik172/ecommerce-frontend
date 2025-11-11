import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { productsData } = useContext(AppContext);

  return (
    <div className="py-12">
      {/* Section Heading */}
      <div className="flex items-center">
        <h2 className="max-w-lg text-lg font-medium text-gray-700">
          New Arrivals
        </h2>
        <div className="ml-2 w-20 border-b-2 border-secondary"></div>
      </div>

      <h2 className="mt-3 text-secondary font-extrabold text-3xl">
        Discover the Latest Products
      </h2>
      <p className="text-gray-500 mt-2">
        Explore trending items across categories — from fashion and electronics
        to home essentials.
      </p>

      {/* Product Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {productsData.length > 0 ? (
          productsData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg py-8">
            No products available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
