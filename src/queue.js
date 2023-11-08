const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const Queue = require("./app/lib/Queue");

const RegistrationMail = require("./app/jobs/RegistrationMail");

Queue.process(RegistrationMail.handle); // a funão reponsavel por processar as filas
