require("dotenv").config();
const nodemailer = require("nodemailer");
const { emailCollection } = require("../model/emailCollection");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "info.driotion@gmail.com",
    pass: process.env.google_app_pass,
  },
});
exports.sendMail = async (req, res) => {
  const { email, name, phone, message } = req.body;
  console.log(email, name, phone, message);
  const info = await transporter.sendMail({
    from: `${email}`,
    to: `Info.Driotion@gmail.com`,
    subject: `Enquiry by ${name} / ${phone} / ${email}✔`,
    text: `I think user want To Enquiry Something`,
    html: `${message} `,
  });
  const data = {
    userInfo: {
      email,
      name,
      phone,
      message,
      date: new Date().getTime(),
    },
  };
  const result = await emailCollection.insertOne(data);
  res.send(result);

  console.log("Message sent: %s", info.messageId);
};
