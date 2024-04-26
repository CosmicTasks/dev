const mongoose = require("mongoose");
const Lista = require("../models/listaModel");

const getListas = async (req, res) => {
  const { id } = req.params;
  try {
    const listas = await Lista.find({ usuario: id }).sort({ createdAt: -1 });
    res.status(200).json(listas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const postLista = async (req, res) => {
  try {
    const { nome, cor, emoji, usuario } = req.body;
    const novaLista = new Lista({ nome, cor, emoji, usuario });
    const listaSalva = await novaLista.save();
    res.status(201).json(listaSalva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getListas, postLista };