const User = require("../models/userModel");
const mongoose = require("mongoose");

// GET todos os usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET um usuario
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  res.status(200).json(user);
};

// POST um novo usuario
const createUser = async (req, res) => {
  const user = req.body;
  
  try {
    const novoUser = await User.create(user);
    res.status(201).json(novoUser);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// DELETE um usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  res.status(200).json(user);
};

// UPDATE um usuario
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  const user = await User.findByIdAndUpdate(id, {
    ...req.body,
  });

  const userUpdated = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "Usuario não encontrado" });
  }

  res.status(200).json(userUpdated);
};

module.exports = { getUsers, getUser, createUser, deleteUser, updateUser };
