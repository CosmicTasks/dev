const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
  },
  emoji: {
    type: String,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Lista", listaSchema);