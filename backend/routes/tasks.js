const express = require('express');
const {
  criarTask,
  buscarTasks,
  buscarTask,
  atualizarTask,
  deletarTask,
} = require('../controllers/taskController.js');

const router = express.Router();

router.post('/', criarTask);
router.get('/:id', buscarTasks);
router.get('/:id', buscarTask);
router.put('/:id', atualizarTask);
router.delete('/:id', deletarTask);

module.exports = router;