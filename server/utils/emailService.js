import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendBookingEmail = async (
  to,
  carName,
  pickupDate,
  returnDate,
  price
) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Car Booking Confirmation 🚗",
    html: `
      <h2>Booking Confirmed ✅</h2>
      <p><b>Car:</b> ${carName}</p>
      <p><b>Pickup Date:</b> ${pickupDate}</p>
      <p><b>Return Date:</b> ${returnDate}</p>
      <p><b>Total Price:</b> ₹${price}</p>
      <br/>
      <p>Thank you for booking with Car Rental.</p>
    `,
  });
};

export const sendOtpEmail = async (
  to,
  otp
) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Password Reset OTP",
    html: `
      <h2>Password Reset Request</h2>
      <p>Your OTP for password reset is:</p>

      <h1
        style="
          color:#2563eb;
          letter-spacing:5px;
        "
      >
        ${otp}
      </h1>

      <p>
        This OTP is valid for
        10 minutes.
      </p>

      <p>
        If you did not request
        this, please ignore this
        email.
      </p>
    `,
  });
};