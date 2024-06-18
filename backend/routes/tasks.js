const express = require('express');
const {
  criarTask,
  buscarTasks,
  buscarTask,
  atualizarTask,
  deletarTask,
  buscarTasksConcluidas,
} = require('../controllers/taskController.js');

const router = express.Router();

router.post('/', criarTask);
router.get('/:id', buscarTasks);
router.get('/:id', buscarTask);
router.put('/:id', atualizarTask);
router.delete('/:id', deletarTask);
router.get('/dash/:id', buscarTasksConcluidas);

module.exports = router;