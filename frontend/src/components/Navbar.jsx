import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserProfile, clearProfile } from "../redux/slices/UserSlice";
import { useLogoutMutation } from "../redux/slices/UserApi";
import { toast } from "react-toastify";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo-2.png";
import Button from "./Button";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userProfile = useSelector(selectUserProfile);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await logout();
    if (response.error) {
      toast.error(response.error.data?.message || "Logout failed!", {
        position: "top-center",
      });
    } else {
      toast.success(response.data?.message || "Logout successful!", {
        position: "top-center",
      });
    }
    dispatch(clearProfile());
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <div className="bg-black px-4 relative">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setShowSidebar(false)}>
          <img src={logo} alt="Company Logo" className="w-28" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          {["Home", "Services","Blogs", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="hover:text-[#FFEE02] transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {userProfile ? (
            <>
              <Button text="Book a Car" />
              <div className="relative">
                <div
                  className="w-10 h-10 flex items-center justify-center bg-[#FFEE02] text-black font-bold rounded-full cursor-pointer overflow-hidden border-2 border-white hover:opacity-90 transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {userProfile.profilePic ? (
                    <img
                      src={userProfile.profilePic}
                      alt="User Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-lg">
                      {userProfile.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black border rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      {userProfile.role === "Admin" && (
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            navigate("/dashboard");
                            setDropdownOpen(false);
                          }}
                        >
                          Dashboard
                        </li>
                      )}
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigate("/my-profile");
                          setDropdownOpen(false);
                        }}
                      >
                        My Profile
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigate("/my-orders");
                          setDropdownOpen(false);
                        }}
                      >
                        My Orders
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button textHover="black" text="Login" />
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IoMdMenu
            className="text-white text-4xl cursor-pointer"
            onClick={() => setShowSidebar(true)}
          />
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-[#000000ab] z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed z-50 top-0 right-0 w-[70%] h-[100vh] bg-white text-black p-5 shadow-lg transition-transform duration-300 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-black text-2xl"
          onClick={() => setShowSidebar(false)}
        >
          ✖
        </button>

        <ul className="flex flex-col gap-4 mt-10">
          {["Home", "Services", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="font-bold text-xl"
              onClick={() => setShowSidebar(false)}
            >
              {item}
            </Link>
          ))}

          {!userProfile ? (
            <>
              <Link
                to="/sign-up"
                className="text-[#FFEE02] font-bold border border-[#FFEE02] text-center py-2 rounded-md hover:bg-[#FFEE02] hover:text-white transition"
                onClick={() => setShowSidebar(false)}
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="bg-[#FFEE02] font-bold text-black text-center py-2 rounded-md hover:bg-[#FFEE02] transition"
                onClick={() => setShowSidebar(false)}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/my-profile"
                className="text-lg font-semibold"
                onClick={() => setShowSidebar(false)}
              >
                My Profile
              </Link>
              <Link
                to="/my-orders"
                className="text-lg font-semibold"
                onClick={() => setShowSidebar(false)}
              >
                My Orders
              </Link>
              {userProfile.role === "Admin" && (
                <Link
                  to="/dashboard"
                  className="text-lg font-semibold"
                  onClick={() => setShowSidebar(false)}
                >
                  Dashboard
                </Link>
              )}
              <Button text="Book a Car" />
              <button
                className="text-left text-red-600 font-semibold mt-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
