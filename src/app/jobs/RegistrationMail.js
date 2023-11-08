const Mail = require("../lib/Mail");

module.exports = {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    const mailOptions = {
      from: "Test  <tokentestsauloaaadmin@gmail.com>",
      to: `${user.name} <${user.email}>`,
      subject: "options.subject",
      text: `Ola ${user.name}`,
      // html: stuff
    };

    await Mail.sendMail(mailOptions);
  },
};
