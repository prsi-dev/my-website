const nodemailer = require("nodemailer");

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

const sendUserRequest = async (sender, email, subject, message) => {
  try {
    await transporter.sendMail({
      from: `"Me"<${EMAIL}>`,
      to: `${EMAIL}`,
      subject: `'Customer  ${email} request : ${subject}'`,
      html: `<main>
      <h2 style="text-align:left;">Customer 🕵🏻‍♂️ ${sender}: ${email} Requests 🔍: ${subject}</h2>
      <br/>
             <p style="text-align:left;"> ${message}</p>
             <b style="text-align:center; justify-content:center;">Made by Pedro Rodriguez with NodeJs</b>
      </main>
             `,
    });
    console.log("email data", data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { sendUserRequest };
