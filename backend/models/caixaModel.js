const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  frente: {
    type: String,
    required: true,
  },
  verso: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const caixaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  niveis: [{
    numero:{
      type: Number,
      required: true,
    },
    intervalo: {
      type: Number,
      required: true,
    },
    flashcards: [flashcardSchema],
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  }]
}, { timestamps: true });

module.exports = mongoose.model("Caixa", caixaSchema);