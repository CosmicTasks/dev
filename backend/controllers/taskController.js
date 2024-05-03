const Task = require("../models/taskModel");
const mongoose = require("mongoose");

const criarTask = async (req, res) => {
  const tarefa = req.body;

  if (!tarefa.nome || !tarefa.lista) {
    return res.status(400).json({ error: "Dados inválidos" });
  }

  try {
    const novaTarefa = await Task.create(tarefa);
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const buscarTasks = async (req, res) => {
  const { id } = req.params;
  const { list } = req.query;

  const buscarTasksHoje = async (id, res) => {
    try {
      const today = new Date(); // Obtém a data e hora atual
      today.setHours(0, 0, 0, 0); // Define a hora para 00:00:00.000

      const tomorrow = new Date(today); // Cria uma cópia da data de hoje
      tomorrow.setDate(tomorrow.getDate() + 1); // Adiciona um dia para obter a data de amanhã

      const tarefas = await Task.find({
        usuario: id,
        vencimento: { $gte: today, $lt: tomorrow }, // Busca tarefas cujo vencimento seja maior ou igual à data de hoje e menor que a data de amanhã
        status: { $ne: "Excluída" }, // Não exibe tarefas excluídas
      }).sort({ vencimento: 1 }); // Ordena as tarefas por data de vencimento

      res.status(200).json(tarefas);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  switch (list) {
    case "hoje":
      return buscarTasksHoje(id, res);
    default:
      return buscarTasksUsuario(id, res);
  }
};

const buscarTask = async (req, res) => {
  const { id } = req.params;

  try {
    const tarefa = await Task.findById(id);
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const atualizarTask = async (req, res) => {
  const { id } = req.params;
  const tarefa = req.body;

  try {
    const tarefaAtualizada = await Task.findByIdAndUpdate(id, tarefa, {
      new: true,
    });
    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deletarTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  criarTask,
  buscarTasks,
  buscarTask,
  atualizarTask,
  deletarTask,
};
