// todas configuraçeos de envio de email

const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail");

const Mail = nodemailer.createTransport(mailConfig);

module.exports = Mail;
