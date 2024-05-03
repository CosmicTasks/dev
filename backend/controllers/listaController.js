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

const updateLista = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Lista não encontrada" });
  }

  const lista = await Lista.findByIdAndUpdate(id, {
    ...req.body,
  });

  if (!lista) {
    return res.status(404).json({ error: "Lista não encontrada" });
  }

  res.status(200).json(lista);
};



module.exports = { getListas, postLista, updateLista };