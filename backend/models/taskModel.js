const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  vencimento: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["A fazer", "Concluída", "Excluída"],
    default: "A fazer",
  },
  prioridade: {
    type: Number,
    default: 1,
    enum: [1, 2, 3]
  },
  tags: {
    type: Array,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lista",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);