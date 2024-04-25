const mongoose = require("mongoose");

const caixaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
})