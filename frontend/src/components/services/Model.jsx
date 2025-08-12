import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCreateOrderMutation } from "../../redux/slices/OrderSlices";
import { toast } from "react-toastify";

const Modal = () => {
  const location = useLocation();
  const service = location.state?.service;
  const navigate = useNavigate();
  const { carId } = useParams();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [user, setUser] = useState({
    date: "",
    time: "",
    from: "",
    to: "",
  });

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center transform transition-all duration-300 hover:shadow-xl">
          <div className="text-red-500 mb-4 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for is not available.</p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 transform hover:-translate-y-0.5"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const orderCar = async (e) => {
    e.preventDefault();
    const id = service._id;
  
    const localDateTime = new Date(`${user.date}T${user.time}`);
  
    const utcDateTime = new Date(
      localDateTime.getTime() - localDateTime.getTimezoneOffset()
    ).toISOString();
  
    const orderData = {
      data: {
        ...user,
        pickupDateTime: utcDateTime,
      },
      price: service.price,
    };
  
    try {
      const response = await createOrder({ id, data: orderData });
  
      if (response.error) {
        toast.error(response.error.data?.message || "Something went wrong", {
          position: "top-center",
        });
      } else {
        toast.success(response.data?.message || "Order created successfully!", {
          position: "top-center",
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Unexpected error occurred!", { position: "top-center" });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
        {/* Service Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={service.servicePic}
            alt={service.serviceName}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold text-white drop-shadow-md">{service.serviceName}</h1>
              <div className="flex items-center space-x-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  Available Now
                </span>
                <span className="text-white text-sm font-medium">${service.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Service</h2>
            <p className="text-gray-600 mb-6">Fill in the details to complete your booking</p>
            
            <form onSubmit={orderCar}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Date Input */}
                <div className="space-y-1">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      name="date"
                      value={user.date}
                      onChange={handleChange}
                      id="date"
                      required
                      disabled={isLoading}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#C8BF40] focus:border-[#C8BF40] block w-full pl-10 p-2.5"
                    />
                  </div>
                </div>
                
                {/* Time Input */}
                <div className="space-y-1">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Pickup Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <input
                      type="time"
                      name="time"
                      value={user.time}
                      onChange={handleChange}
                      id="time"
                      required
                      disabled={isLoading}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#C8BF40] focus:border-[#C8BF40] block w-full pl-10 p-2.5"
                    />
                  </div>
                </div>
              </div>

              {/* Location Fields */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Location Details</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700">Pickup Location</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="from"
                        value={user.from}
                        onChange={handleChange}
                        id="from"
                        required
                        disabled={isLoading}
                        placeholder="Enter pickup address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#C8BF40] focus:border-[#C8BF40] block w-full pl-10 p-2.5"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700">Drop-off Location</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="to"
                        value={user.to}
                        onChange={handleChange}
                        id="to"
                        required
                        disabled={isLoading}
                        placeholder="Enter drop-off address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#C8BF40] focus:border-[#C8BF40] block w-full pl-10 p-2.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  className={`w-full text-white bg-gradient-to-r from-[#C8BF40] to-[#D9D255] hover:from-[#c8bf40d8] hover:to-[#d9d255d8] focus:ring-4 focus:ring-[#C8BF40]/50 font-medium rounded-lg text-sm px-5 py-3 text-center shadow-md transition-all duration-300 transform hover:scale-[1.01] ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Confirm Booking
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Footer */}
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>By proceeding, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;