// OrderSummary.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../redux/slices/OrderSlices";
import { toast } from "react-toastify";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, service } = location.state || {};
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  if (!user || !service)
    return <p className="text-center mt-10 text-red-500 font-bold">No order data found</p>;

  // Extract numeric value from distance string ("12 km") and calculate total price
  const distanceKm = user.distance ? parseFloat(user.distance.replace(/[^\d.]/g, "")) : 0;
  const totalPrice = (distanceKm * service.price).toFixed(2);

  const confirmOrder = async () => {
    const localDateTime = new Date(`${user.date}T${user.time}`);
    const utcDateTime = new Date(
      localDateTime.getTime() - localDateTime.getTimezoneOffset() * 60000
    ).toISOString();

    const orderData = {
      data: { ...user, pickupDateTime: utcDateTime },
      price: totalPrice,
    };

    try {
      const response = await createOrder({ id: service._id, data: orderData });
      if (response.error) {
        toast.error(response.error.data?.message || "Something went wrong", { position: "top-center" });
      } else {
        toast.success(response.data?.message || "Order created successfully!", { position: "top-center" });
        navigate("/");
      }
    } catch (err) {
      toast.error("Unexpected error occurred!", { position: "top-center" });
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Order Summary</h2>

        {/* Service Info */}
        <div className="flex items-center gap-4">
          <img
            src={service.servicePic}
            alt={service.serviceName}
            className="w-24 h-24 object-cover rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold">{service.serviceName}</h3>
            <p className="text-gray-600 text-sm mt-1">
              Category: <span className="font-medium">{service.serviceCategory}</span>
            </p>
          </div>
        </div>

        {/* Booking Details */}
        <div className="bg-gray-50 border rounded-lg p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Pickup:</span>
            <span className="text-gray-900">{user.from}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Drop-off:</span>
            <span className="text-gray-900">{user.to}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Date:</span>
            <span className="text-gray-900">{user.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Time:</span>
            <span className="text-gray-900">{user.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Distance:</span>
            <span className="text-gray-900">{user.distance}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Duration:</span>
            <span className="text-gray-900">{user.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Price per km:</span>
            <span className="text-gray-900">${service.price}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
            <span>Total Price:</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium rounded-lg py-2 transition"
          >
            Back
          </button>
          <button
            onClick={confirmOrder}
            disabled={isLoading}
            className="flex-1 text-white bg-gradient-to-r from-[#C8BF40] to-[#D9D255] hover:opacity-90 font-medium rounded-lg py-2 transition"
          >
            {isLoading ? "Processing..." : "Confirm Order"}
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          By confirming, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
