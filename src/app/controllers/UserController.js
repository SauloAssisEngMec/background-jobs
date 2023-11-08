const Queue = require("../lib/Queue");

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // adiiconar job de Registration na fila

    await Queue.add({ user });

    return res.status(201).json(user);
  },
};
