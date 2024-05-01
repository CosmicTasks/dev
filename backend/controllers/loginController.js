const User = require("../models/userModel");
const mongoose = require("mongoose");

const userLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await User.findOne({ email: email});
    if (!user) {
      return res.status(404).json({ error: "Usuario não encontrado" });
    }
    if (user.senha !== senha) {
      return res.status(401).json({ error: "Senha inválida" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { userLogin };