const User = require("../models/userModel");

const userLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await User.findOne({ email: email});
    if (!user) {
      return res.status(404).json({ error: "Usuário ou senha incorretos." });
    }

    if (user.senha !== senha) {
      return res.status(404).json({ error: "Usuário ou senha incorretos." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { userLogin };