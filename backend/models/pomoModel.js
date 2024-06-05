const mongoose = require('mongoose');

const pomoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  inicio: {
    type: Date,
    default: Date.now,
  }, 
  fim: {
    type: Date,
  },
  duracao: {
    type: Number,
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Pomo", pomoSchema);