const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const secretKey = 'your-256-bit-secret';

const userLogin = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const user = await User.findOne({ email: email});
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const passwordIsValid = bcrypt.compareSync(senha, user.senha);
    if (!passwordIsValid) {
      return res.status(401).json({ error: "Usuário ou senha incorretos." });
    }

    const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h'});

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { userLogin };