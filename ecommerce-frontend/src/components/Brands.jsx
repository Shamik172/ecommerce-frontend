import { assets } from "../assets/assets";

const Brands = () => {
  const brands = [
    assets.brand_1,
    assets.brand_2,
    assets.brand_3,
    assets.brand_4,
    assets.brand_5,
  ];

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
        Trusted by Top Brands
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={brand}
              alt={`brand-${index + 1}`}
              className="w-[160px] h-[160px] object-contain opacity-80 hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
