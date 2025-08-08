import React, { useEffect, useRef, useState } from "react";
import { useCreateReviewMutation } from "../../redux/slices/ReviewApi";
import { toast } from "react-toastify";

export default function ReviewForm({ className, setFormReview }) {
  const [data, setData] = useState({ rating: 0, description: "" });
  const [hoverRating, setHoverRating] = useState(0);
  const formRef = useRef(null);

  const [createReview, { isLoading, error }] = useCreateReviewMutation();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRating = (value) => {
    setData({ ...data, rating: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReview(data).unwrap();
      toast.success("Review Submitted Successfully", { position: "top-center" });
      setFormReview(false);
    } catch (err) {
      console.error("Review submission failed:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormReview(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [setFormReview]);

  const renderStar = (star) => {
    const effectiveRating = hoverRating || data.rating;
    const isFull = effectiveRating >= star;
    const isHalf = !isFull && effectiveRating >= star - 0.5;

    if (isFull) {
      return <span className="text-yellow-400">★</span>;
    } else if (isHalf) {
      return (
        <div className="relative w-6 h-6">
          <span className="absolute top-0 left-0 w-full h-full text-gray-300">★</span>
          <span 
            className="absolute top-0 left-0 w-6/7 h-full text-yellow-400 overflow-hidden"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          >
            ★
          </span>
        </div>
      );
    } else {
      return <span className="text-gray-300">★</span>;
    }
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center ${className}`}>
      <div ref={formRef} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Review</h2>
        <form method="POST" onSubmit={handleSubmit}>
          {/* Star Rating */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="relative cursor-pointer w-6 h-6 text-2xl"
                  onClick={(e) => {
                    const { left, width } = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - left;
                    const value = clickX < width / 2 ? star - 0.5 : star;
                    handleRating(value);
                  }}
                  onMouseMove={(e) => {
                    const { left, width } = e.currentTarget.getBoundingClientRect();
                    const hoverX = e.clientX - left;
                    const value = hoverX < width / 2 ? star - 0.5 : star;
                    setHoverRating(value);
                  }}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {renderStar(star)}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-1">Rating: {data.rating} / 5</p>
          </div>

          {/* Review Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Review
            </label>
            <textarea
              id="description"
              rows="4"
              name="description"
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button type="button" onClick={() => setFormReview(false)} className="text-gray-500 hover:text-red-500">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-2">Error submitting review. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}