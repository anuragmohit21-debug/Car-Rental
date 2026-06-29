// import PDFDocument from "pdfkit";
// import fs from "fs";
// import path from "path";

// export const generateInvoice = (
//   booking,
//   car,
//   user
// ) => {
//   const invoiceDir = path.join(
//     process.cwd(),
//     "invoices"
//   );

//   if (!fs.existsSync(invoiceDir)) {
//     fs.mkdirSync(invoiceDir, {
//       recursive: true,
//     });
//   }

//   const filePath = path.join(
//     invoiceDir,
//     `invoice-${booking._id}.pdf`
//   );

//   const doc = new PDFDocument();

//   doc.pipe(fs.createWriteStream(filePath));

//   doc.fontSize(22).text(
//     "Car Rental Invoice",
//     { align: "center" }
//   );

//   doc.moveDown();

//   doc.fontSize(14)
//     .text(`Invoice ID: ${booking._id}`)
//     .text(`Customer: ${user.name}`)
//     .text(`Email: ${user.email}`)
//     .text(`Car: ${car.brand} ${car.model}`)
//     .text(
//       `Pickup Date: ${new Date(
//         booking.pickupDate
//       ).toDateString()}`
//     )
//     .text(
//       `Return Date: ${new Date(
//         booking.returnDate
//       ).toDateString()}`
//     )
//     .text(`Amount Paid: Rs. ${booking.price}`);

//   doc.moveDown();
//   doc.text(
//     "Thank you for booking with us! We hope you enjoy your ride.",
//   );

//   doc.end();

//   return filePath;
// };


import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generateInvoice = (
  booking,
  car,
  user
) => {
  const invoiceDir = path.join(
    process.cwd(),
    "invoices"
  );

  if (!fs.existsSync(invoiceDir)) {
    fs.mkdirSync(invoiceDir, {
      recursive: true,
    });
  }

  const filePath = path.join(
    invoiceDir,
    `invoice-${booking._id}.pdf`
  );

  const doc = new PDFDocument({
    margin: 50,
  });

  doc.pipe(fs.createWriteStream(filePath));

  // Header
  doc
    .fillColor("#1e40af")
    .fontSize(28)
    .text("CAR RENTAL", {
      align: "center",
    });

  doc
    .moveDown(0.5)
    .fillColor("black")
    .fontSize(16)
    .text("Booking Invoice", {
      align: "center",
    });

  doc.moveDown(2);

  // Invoice Details
  doc
    .fillColor("#1e40af")
    .fontSize(18)
    .text("Invoice Details");

  doc
    .moveDown(0.5)
    .fillColor("black")
    .fontSize(12)
    .text(`Invoice ID : ${booking._id}`)
    .text(
      `Invoice Date : ${new Date().toDateString()}`
    );

  doc.moveDown();

  // Customer Details
  doc
    .fillColor("#1e40af")
    .fontSize(18)
    .text("Customer Details");

  doc
    .moveDown(0.5)
    .fillColor("black")
    .fontSize(12)
    .text(`Name : ${user.name}`)
    .text(`Email : ${user.email}`);

  doc.moveDown();

  // Booking Details
  doc
    .fillColor("#1e40af")
    .fontSize(18)
    .text("Booking Details");

  doc
    .moveDown(0.5)
    .fillColor("black")
    .fontSize(12)
    .text(`Car : ${car.brand} ${car.model}`)
    .text(`Category : ${car.category}`)
    .text(`Location : ${car.location}`)
    .text(
      `Pickup Date : ${new Date(
        booking.pickupDate
      ).toDateString()}`
    )
    .text(
      `Return Date : ${new Date(
        booking.returnDate
      ).toDateString()}`
    );

  doc.moveDown(2);

  // Payment Box
  const boxY = doc.y;

  doc
    .rect(50, boxY, 500, 70)
    .fillAndStroke(
      "#eff6ff",
      "#1e40af"
    );

  doc
    .fillColor("#1e40af")
    .fontSize(15)
    .text(
      "TOTAL AMOUNT PAID",
      70,
      boxY + 20
    );

  doc
    .fillColor("black")
    .fontSize(22)
    .text(
      `Rs. ${booking.price}`,
      320,
      boxY + 18
    );

  doc.y = boxY + 90;

  // Footer
  doc.moveDown();

  doc
    .fillColor("gray")
    .fontSize(14)
    .text(
      "Thank you for choosing our Car Rental Service!",
      {
        align: "center",
      }
    );

  doc
    .fontSize(12)
    .text(
      "We hope you have a great journey.",
      {
        align: "center",
      }
    );

  doc.end();

  return filePath;
};