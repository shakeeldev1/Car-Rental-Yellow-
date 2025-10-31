import SendMail from "../utils/SendMail.js";

const sendOrderConfirmationEmail = async (
  customerEmail,
  customerName,
  orderDetails
) => {
  try {
    const {
      serviceId,
      pickupLocation,
      dropoffLocation,
      distance,
      price,
      pickupDateTime,
    } = orderDetails;

    const serviceName = serviceId?.serviceName || "Service Name Not Available";

    // Format distance as number + km
    const formattedDistance =
      typeof distance === "number" ? `${distance.toFixed(1)} km` : distance;

    // Format price as 2 decimal places
    const formattedPrice =
      typeof price === "number" ? price.toFixed(2) : price;

    // Format pickup date & time
    const formattedPickupDateTime = new Date(orderDetails.pickupDateTime).toLocaleString(
      "en-US",
      {
        timeZone: "Asia/Karachi",
        dateStyle: "medium",
        timeStyle: "short",
      }
    );


    const subject = "🚗 Your Car Rental Booking Confirmation - Trend Car Care";

    const text = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <p>Hello <strong>${customerName}</strong>,</p>
        <p>Thank you for choosing <strong>Trend Car Care</strong> for your travel needs! We truly appreciate your trust in our service.</p>

        <h3 style="color: #4CAF50;">📌 Order Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 4px 8px; font-weight: bold;">Service Name:</td>
            <td style="padding: 4px 8px;">${serviceName}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; font-weight: bold;">Pickup Location:</td>
            <td style="padding: 4px 8px;">${pickupLocation}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; font-weight: bold;">Dropoff Location:</td>
            <td style="padding: 4px 8px;">${dropoffLocation}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; font-weight: bold;">Total Distance:</td>
            <td style="padding: 4px 8px;">${formattedDistance}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; font-weight: bold;">Total Price:</td>
            <td style="padding: 4px 8px;">$${formattedPrice} only</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; font-weight: bold;">Pickup Date & Time:</td>
            <td style="padding: 4px 8px;">${formattedPickupDateTime}</td>
          </tr>
        </table>

        <p>🚗 Our driver will arrive at your pickup location on time. If you have any changes or inquiries, feel free to contact us.</p>

        <p>We appreciate your business and look forward to providing you with a smooth and comfortable ride.</p>

        <p>Best regards,</p>
        <p><strong>The Trend Car Care Team</strong></p>
        <p>📧 support@trendcarcare.com | 📞 +123-456-7890</p>
      </div>
    `;

    await SendMail(customerEmail, subject, text);
  } catch (error) {
    throw new Error(
      `Failed to send confirmation email: ${error?.response?.body || error.message
      }`
    );
  }
};

export default sendOrderConfirmationEmail;
