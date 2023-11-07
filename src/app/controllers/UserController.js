// exports.store = async function (req, res) {
//   const { name, email, password } = req.body;

//   const user = {
//     name,
//     email,
//     password,
//   };

//   return res.status(201).json(user);

//   // enivar email
// };
module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    return res.status(201).json(user);

    // enivar email
  },
};
