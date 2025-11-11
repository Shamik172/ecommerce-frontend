import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const AddAddress = () => {
  const { navigate, axios, loading, setLoading } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post("/api/address/add", formData);
      if (data.success) {
        toast.success(data.message || "Address added successfully!");
        navigate("/checkout");
      } else {
        toast.error(data.message || "Failed to add address!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="py-12 bg-[#0B482F]"
      style={{ backgroundImage: `url(${assets.footer_img})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div>
        <form
          onSubmit={submitHandler}
          className="max-w-xl w-full mx-auto text-white p-6 border border-white rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Add Shipping Address
          </h2>

          <div className="text-white flex flex-col gap-2 mb-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
            />
          </div>

          <div className="text-white flex flex-col gap-2 mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
            />
          </div>

          <div className="text-white flex flex-col gap-2 mb-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
            />
          </div>

          <div className="text-white flex flex-col gap-2 mb-4">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              required
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="House no, Street name"
              className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
            />
          </div>

          <div className="text-white flex flex-col gap-2 mb-4">
            <label htmlFor="addressLine2">Address Line 2 (Optional)</label>
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Apartment, suite, etc."
              className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-white flex flex-col gap-2">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
              />
            </div>

            <div className="text-white flex flex-col gap-2">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-white flex flex-col gap-2">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
              />
            </div>

            <div className="text-white flex flex-col gap-2">
              <label htmlFor="zipCode">ZIP / Postal Code</label>
              <input
                type="text"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Enter ZIP code"
                className="w-full outline-none border border-white py-3 rounded p-2 bg-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-green-700 text-white cursor-pointer py-3 rounded transition-all duration-200"
          >
            {loading ? "Please wait..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
