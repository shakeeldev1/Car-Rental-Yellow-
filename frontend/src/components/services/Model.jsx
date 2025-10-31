// BookingForm.jsx
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

const BookingForm = () => {
  const location = useLocation();
  const service = location.state?.service; // Service object from backend
  const navigate = useNavigate();

  const [user, setUser] = useState({
    date: "",
    time: "",
    from: "",
    to: "",
    distance: "",
    duration: "",
    totalPrice: "",
  });

  const fromAuto = useRef(null);
  const toAuto = useRef(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries,
  });

  if (!service) {
    return <p className="text-center mt-10 text-red-500 font-bold">Service Not Found</p>;
  }

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const calculateDistance = () => {
    if (!fromAuto.current || !toAuto.current) return;

    const fromPlace = fromAuto.current.getPlace();
    const toPlace = toAuto.current.getPlace();
    if (!fromPlace || !toPlace) return;

    const distanceService = new window.google.maps.DistanceMatrixService();
    distanceService.getDistanceMatrix(
      {
        origins: [fromPlace.geometry.location],
        destinations: [toPlace.geometry.location],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          const result = response.rows[0].elements[0];
          const distanceText = result.distance.text;
          const distanceKm = result.distance.value / 1000; // convert meters to km
          const durationText = result.duration.text;

          const totalPrice = distanceKm * service.price; // Backend price per km

          setUser((prev) => ({
            ...prev,
            from: fromPlace.formatted_address,
            to: toPlace.formatted_address,
            distance: distanceText,
            duration: durationText,
            totalPrice: totalPrice.toFixed(2),
          }));
        } else {
          toast.error("Unable to calculate distance");
        }
      }
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!user.from || !user.to || !user.date || !user.time) {
      toast.error("Please fill all details first");
      return;
    }

    // Pass user + service to next step (order summary)
    navigate("/order-summary", { state: { user, service } });
  };

  if (!isLoaded) return <p className="text-center mt-10">Loading map services...</p>;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={service.servicePic}
            alt={service.serviceName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full text-white">
            <h1 className="text-3xl font-bold">{service.serviceName}</h1>
            <p className="text-sm bg-blue-100 text-blue-800 rounded-full px-2 py-0.5 inline-block mt-2">
              ${service.price} per km
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Service</h2>
            <p className="text-gray-600 mb-6">Fill in the details to complete your booking</p>

            <form>
              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
                  <input
                    type="date"
                    name="date"
                    value={user.date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pickup Time</label>
                  <input
                    type="time"
                    name="time"
                    value={user.time}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              {/* Pickup & Dropoff */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
                  <Autocomplete
                    onLoad={(auto) => (fromAuto.current = auto)}
                    onPlaceChanged={calculateDistance}
                  >
                    <input
                      type="text"
                      placeholder="Enter pickup address"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </Autocomplete>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Drop-off Location</label>
                  <Autocomplete
                    onLoad={(auto) => (toAuto.current = auto)}
                    onPlaceChanged={calculateDistance}
                  >
                    <input
                      type="text"
                      placeholder="Enter drop-off address"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </Autocomplete>
                </div>
              </div>

              {/* Distance & Price Info */}
              {user.distance && (
                <div className="mt-4 bg-gray-50 border rounded-lg p-3">
                  <p><strong>Distance:</strong> {user.distance}</p>
                  <p><strong>Duration:</strong> {user.duration}</p>
                  <p><strong>Total Price:</strong> ${user.totalPrice}</p>
                </div>
              )}

              {/* Next Button */}
              <div className="mt-6">
                <button
                  onClick={handleNext}
                  className="w-full text-white bg-gradient-to-r from-[#C8BF40] to-[#D9D255] hover:opacity-90 font-medium rounded-lg text-sm px-5 py-3"
                >
                  Next
                </button>
              </div>
            </form>
          </div>

          {/* Terms */}
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>By proceeding, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
