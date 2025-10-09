import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { useGetReviewsQuery } from "../../redux/slices/ReviewApi";
import ReviewForm from "./ReviewForm";

const Testimonials = () => {
  const [FormReview, setFormReview] = useState(false);
  const { data: reviewsResponse, isLoading, isError } = useGetReviewsQuery();
  const reviews = reviewsResponse?.reviews || [];
  const highRatedReviews = reviews.filter((review) => review.rating >= 4);
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  const handleAddReview = () => {
    setFormReview(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const location = useLocation();
  const homeTestimonials = location.pathname === "/";
  const aboutTestimonials = location.pathname === "/about";

  if (isLoading)
    return <div className="text-center py-10">Loading reviews...</div>;
  if (isError)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading reviews
      </div>
    );

  return (
    <div className="sm:py-10 px-4 relative">
      <ReviewForm
        className={`${FormReview ? "block" : "hidden"}`}
        setFormReview={setFormReview}
      />

      {highRatedReviews && (
        <div className="w-full max-w-5xl mx-auto shadow-md bg-gray-100 p-8 md:p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center">
          {/* Heading */}
          <div
            className="w-full md:w-1/3 text-center md:text-left"
            data-aos="fade-down"
          >
            <h1 className="text-3xl my-auto font-bold text-black leading-snug">
              Our <span className="text-[#FFF200]">Clients,</span> In Their Own
              Words
            </h1>
          </div>

          {/* Testimonials Carousel */}
          <div className="w-full md:w-2/3" data-aos="zoom-in">
            {highRatedReviews.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={aboutTestimonials ? false : { clickable: true }}
                navigation={aboutTestimonials}
                autoplay={{ delay: 5000 }}
                loop
                className="rounded-lg overflow-hidden w-full"
              >
                {highRatedReviews.map((review) => (
                  <SwiperSlide
                    key={review._id || Math.random()}
                    className="w-full"
                  >
                    <div
                      className={`${homeTestimonials ? "text-black bg-white" : "text-black bg-white"
                        } w-full ${homeTestimonials ? "" : "sm:w-9/12"
                        } mx-auto rounded-lg shadow-md p-6 space-y-4 min-h-[300px]]`}
                    >
                      <div className="flex justify-start gap-6 items-cente">
                        <h1 className="text-md sm:text-xl font-bold">
                          {review.rating?.toFixed(1) || "5.0"}
                        </h1>
                        <div className="flex text-md sm:text-xl ml-2 gap-1">
                          {renderStars(review.rating || 5)}
                        </div>
                      </div>

                      <div className="pb-5">
                        <div className="flex justify-start gap-5 items-center mb-2">
                          <img
                            src={
                              review.user?.profilePic ||
                              "https://randomuser.me/api/portraits/lego/1.jpg"
                            }
                            className="rounded-full h-20 w-20"
                            alt={review.user?.name || "Anonymous"}
                          />
                          <div className="">
                            <h1 className="sm:text-lg font-semibold">
                              {review.user?.name || "Anonymous"}
                            </h1>
                            <p className="text-sm text-gray-400">
                              {review.user?.role || "Customer"}
                            </p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">
                          {review.description || "No review text provided"}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="text-white text-center py-10">
                No high-rated reviews yet. Be the first to leave one!
              </div>
            )}

            <div className="flex mt-3 justify-center sm:justify-end p-1">
              <button
                data-aos="zoom-out"
                onClick={handleAddReview}
                className="px-2 py-2 text-xs sm:px-3 sm:py-2 cursor-pointer text-black hover:text-white sm:text-lg font-semibold rounded-md text-md shadow-lg bg-[#FFEE02] hover:bg-[#C8BF40] transition-all duration-700"
                title="Click to add your review"
              >
                Add your reviews
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
