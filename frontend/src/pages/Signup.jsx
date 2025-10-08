import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import signup from "../assets/AUTH/signup.jpg";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useUserRegistrationMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [userRegistration, { isLoading }] = useUserRegistrationMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Handle input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle register
  const handleRegister = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const response = await userRegistration(formData);
    if (response.error) {
      toast.error(response.error.data?.message || "Registration failed!", {
        position: "top-center",
      });
    } else {
      toast.success(response.data?.message || "Registration successful!", {
        position: "top-center",
      });
      navigate("/user-verification", { state: { user: formData } });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div
        className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl"
        data-aos="zoom-in"
      >
        {/* ✅ Left Section with AOS */}
        <div
          className="hidden md:flex w-1/2 bg-gradient-to-br from-gray-50 to-[#f8f7e8] items-center justify-center p-8 relative overflow-hidden"
          data-aos="fade-right"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#b6aa03] opacity-10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#b6aa03] opacity-10 rounded-full translate-x-20 translate-y-20"></div>

          <div className="relative z-10 text-center">
            <img
              src={signup}
              alt="Signup Illustration"
              className="w-4/5 mx-auto object-cover rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <h3
              className="text-2xl font-bold text-gray-800 mt-6 mb-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Join Our Community
            </h3>
            <p
              className="text-gray-600 text-sm max-w-md mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Create your account and discover a world of possibilities. Start
              your journey with us today.
            </p>
          </div>
        </div>

        {/* ✅ Right Section with Staggered Animations */}
        <div
          className="w-full md:w-1/2 flex flex-col p-8 md:p-12 bg-white relative"
          data-aos="fade-left"
        >
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#b6aa03] opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#b6aa03] opacity-60"></div>

          <div className="text-center mb-8">
            <h2
              className="text-4xl font-bold text-gary-800 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              data-aos="fade-down"
            >
              Create <span className="text-[#FFEE02]">Account</span> 
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
                <label className="block text-gray-700 text-sm font-semibold uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-200 p-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b6aa03] focus:border-transparent transition-all duration-200 bg-gray-50 placeholder-gray-400"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
                <label className="block text-gray-700 text-sm font-semibold uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-200 p-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b6aa03] focus:border-transparent transition-all duration-200 bg-gray-50 placeholder-gray-400"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
                <label className="block text-gray-700 text-sm font-semibold uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full border border-gray-200 p-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b6aa03] focus:border-transparent transition-all duration-200 bg-gray-50 placeholder-gray-400"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setFormData((prev) => ({ ...prev, phone: value }));
                  }}
                  required
                />
              </div>

              <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
                <label className="block text-gray-700 text-sm font-semibold uppercase tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full border border-gray-200 p-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b6aa03] focus:border-transparent transition-all duration-200 bg-gray-50 placeholder-gray-400 pr-12"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div
              className="flex items-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    rememberMe: e.target.checked,
                  }))
                }
                className="hidden"
              />
              <div
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    rememberMe: !prev.rememberMe,
                  }))
                }
                className={`w-5 h-5 border-2 rounded-md flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  formData.rememberMe
                    ? "bg-[#b6aa03] border-[#b6aa03]"
                    : "border-gray-300 bg-white"
                }`}
              >
                {formData.rememberMe && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <label
                htmlFor="rememberMe"
                className="ml-3 text-gray-600 text-sm font-medium cursor-pointer hover:text-gray-800 transition-colors duration-200 select-none"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="600"
              className={`relative w-full mt-3 overflow-hidden group bg-[#FFEE02]  text-white p-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                isLoading ? "cursor-not-allowed opacity-70" : ""
              }`}
              disabled={isLoading}
            >
              <span className="absolute top-0 left-1/2 w-0 h-full bg-black -translate-x-1/2 group-hover:w-full transition-all duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </span>
            </button>

            <div
              className="relative my-5"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <button
              type="button"
              data-aos="fade-up"
              data-aos-delay="800"
              className="flex items-center justify-center w-full border-2 border-gray-200 p-4 rounded-xl font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                <FaGoogle className="text-white text-sm" />
              </div>
              <span className="ml-4 font-medium">Sign up with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
