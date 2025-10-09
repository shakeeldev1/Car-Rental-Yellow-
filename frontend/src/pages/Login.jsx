import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "../assets/AUTH/logintwo.png";
import { useLoginMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/slices/UserSlice";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await loginUser(formData);
      if (resp.error) {
        toast.error(resp.error.data?.message || "Login failed", { position: "top-center" });
      } else {
        toast.success(resp.data?.message || "Login successful", { position: "top-center" });
        dispatch(setProfile(resp.data?.user));
        navigate("/");
      }
    } catch (error) {
      toast.error("An unexpected error occurred", { position: "top-center" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 ">
      <div
        className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl"
        data-aos="zoom-in"
      >
        {/* Left Side - Login Form */}
        <div
          className="w-full md:w-1/2 flex flex-col p-8 md:p-12"
          data-aos="fade-right"
        >
          <div className="text-center mb-8" data-aos="fade-down">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Welcome <span className="text-[#FFEE02]">Back</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Start your journey with us. Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-[#b6aa03] font-semibold hover:text-[#FFEE02] transition-colors duration-300 cursor-pointer underline decoration-2 decoration-[#b6aa03] hover:decoration-[#FFEE02]"
              >
                Sign up
              </Link>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="relative group" data-aos="fade-up" data-aos-delay="100">
              <label className="block text-gray-700 text-lg font-semibold mb-3">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-colors duration-300 group-focus-within:text-[#b6aa03]" />
                <input
                  type="email"
                  name="email"
                  className="w-full border-1 border-gray-200 bg-gray-50 p-3 pl-12 rounded-xl text-gray-800 focus:outline-none focus:border-[#b6aa03] focus:bg-white transition-all duration-300 shadow-sm hover:border-gray-300"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative group" data-aos="fade-up" data-aos-delay="200">
              <label className="block text-gray-700 text-lg font-semibold mb-3">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg transition-colors duration-300 group-focus-within:text-[#b6aa03]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full border-1 border-gray-200 bg-gray-50 p-3 pl-12 pr-12 rounded-xl text-gray-800 focus:outline-none focus:border-[#b6aa03] focus:bg-white transition-all duration-300 shadow-sm hover:border-gray-300"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#b6aa03] transition-colors duration-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div
              className="flex items-center justify-between mb-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember" className="text-gray-600 text-sm font-medium cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-[#b6aa03] font-semibold cursor-pointer text-sm hover:text-[#FFEE02] transition-colors duration-300"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              data-aos="zoom-in"
              data-aos-delay="400"
              className={`
                relative w-full mt-4 overflow-hidden group
                bg-[#FFEE02]
                text-white p-4 cursor-pointer rounded-xl font-semibold text-lg
                transition-all duration-300 transform hover:-translate-y-0.5
                shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg
              `}
            >
              <span className="absolute top-0 left-1/2 w-0 h-full bg-black -translate-x-1/2 group-hover:w-full transition-all duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign in to your account"
                )}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8" data-aos="fade-up" data-aos-delay="500">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="px-4 text-gray-500 font-medium bg-white">OR</span>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Google Sign-in Button */}
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex items-center cursor-pointer justify-center w-full border-2 border-gray-200 bg-white p-4 rounded-xl font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={() => toast.info("Google Sign-in coming soon!")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
              <FaGoogle className="text-white text-sm" />
            </div>
            <span className="ml-3 text-gray-700 font-semibold">Sign in with Google</span>
          </button>
        </div>

        {/* Right Side - Image */}
        <div
          className="hidden md:flex w-1/2 bg-gradient-to-br from-[#f8f7e6] to-[#f0eed0] items-center justify-center p-8 relative overflow-hidden"
          data-aos="fade-left"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b6aa03] to-[#c8bc1a]"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b6aa03] to-[#c8bc1a]"></div>
          <div className="relative z-10 text-center" data-aos="zoom-in" data-aos-delay="200">
            <img
              src={loginImage}
              alt="Login Illustration"
              className="w-[90%] mx-auto object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="mt-8 text-gray-700" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold mb-2">Welcome Back!</h3>
              <p className="text-gray-600">
                We're excited to have you back. Continue your journey with us.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#b6aa03] opacity-5 rounded-full"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#b6aa03] opacity-5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
