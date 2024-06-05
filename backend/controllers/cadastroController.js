const User = require("../models/userModel");
const mongoose = require("mongoose");

const cadastrarUsuario = async (req, res) => {
  const user = req.body;

  if (!user.email || !user.senha || !user.nome) {
    return res.status(400).json({ error: "Dados inválidos" });
  }

  try {
    const findUser = await User.findOne({ email: user.email });
    if (findUser) {
      return res.status(409).json({ error: "Email já cadastrado" });
    } else {
      const novoUser = await User.create(user);
      res.status(201).json(novoUser);
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

module.exports = {
  cadastrarUsuario,
};