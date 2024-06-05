const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
})

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
    enum: ["A fazer", "Em andamento", "Concluída", "Atrasada", "Excluída"],
    default: "A fazer",
  },
  prioridade: {
    type: Number,
    default: 5,
    enum: [1, 2, 3, 4, 5]
  },
  tags: [tagSchema],
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