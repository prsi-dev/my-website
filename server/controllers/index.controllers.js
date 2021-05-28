const { sendUserRequest } = require('../config/nodemailer');

const getHealthCheck = (req, res, next) => {
  res.status(200).json({
    data: 'Server Running!',
    status: 'ok',
  });
};


const postUserRequest = async (req, res, next) => {
  const  {sender, email, subject, message}  = req.body;
  await sendUserRequest(sender, email, subject, message);
  console.log("recipient", req.body)

  res.status(200).json();
};
module.exports = {
  getHealthCheck,
  postUserRequest,
};
