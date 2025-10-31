import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Signup";
import EmailOTPForm from "./pages/VerifyOtp";
import About from "./pages/AboutUs";
import Booking from "./pages/Booking";
import VerifyUser from "./pages/VerifyUser";
import MyProfile from "./pages/MyProfile";
import UpdatePassword from "./pages/UpdatePassword";

import Sidebar from "./components/dashboard/common/Sidebar";
import OverviewPage from "./pages/dashboard/OverviewPage";
import ProductsPage from "./pages/dashboard/ProductsPage";
import UsersPage from "./pages/dashboard/UsersPage";
import SalesPage from "./pages/dashboard/SalesPage";
import OrdersPage from "./pages/dashboard/OrdersPage";
import { useDispatch } from "react-redux";
import { useProfileQuery } from "./redux/slices/UserApi";
import { clearProfile, setProfile } from "./redux/slices/UserSlice";
import AdminRoute from "./middleWares/AdminRoute";
import ScrollToTop from "./components/ScrollToTop";
import UserOrders from "./pages/UserOrders";
import UpdateOrder from "./pages/UpdateOrder";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Blogs from "./pages/Blogs";
import BlogDetails from "./components/blogs/BlogDetails";
import AdminBlogs from "./pages/dashboard/AdminBlogs";
import HeaderMail from "./pages/HeaderMail";
import OrderSummary from "./components/services/OrderSummary";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderMail />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <div className="flex h-screen  text-blue-700 overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br bg-white text-blue-700" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <ScrollToTop />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/booking/:id", element: <Booking /> },
      { path: "/order-summary", element: <OrderSummary /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/about-us", element: <About /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/update-password", element: <UpdatePassword /> },
      { path: "/my-orders", element: <UserOrders /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/update-order/:id", element: <UpdateOrder /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blog/:id", element: <BlogDetails /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/sign-up", element: <RegisterPage /> },
  { path: "/verify-otp", element: <EmailOTPForm /> },
  { path: "/user-verification", element: <VerifyUser /> },
  {
    element: <AdminRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "/dashboard", element: <OverviewPage /> },
          { path: "/products", element: <ProductsPage /> },
          { path: "/users", element: <UsersPage /> },
          { path: "/sales", element: <SalesPage /> },
          { path: "/orders", element: <OrdersPage /> },
          { path: "/admin-blogs", element: <AdminBlogs /> },
        ],
      },
    ],
  },
]);
const App = () => {
  const dispatch = useDispatch();
  const { data: profileData } = useProfileQuery();

  useEffect(() => {
    if (profileData) {
      dispatch(setProfile(profileData.user));
    } else {
      dispatch(clearProfile());
    }
  }, [profileData, dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
