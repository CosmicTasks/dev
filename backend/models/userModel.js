const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  configuracoes: {
    type: Object,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);