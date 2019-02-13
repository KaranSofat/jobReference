var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karansofat89@gmail.com',
    pass: 'asp.net9814514144php12345'
  }
})

module.exports = transporter;