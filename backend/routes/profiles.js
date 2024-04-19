const express = require('express');

const router = express.Router();

// GET todos os perfis
router.get('/', (req, res) => {
  res.json({mssg: 'GET todos os perfis'})
});

// GET um perfil
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET um perfil'})
});

// POST um novo perfil
router.post('/', (req, res) => {
  res.json({mssg: 'POST um novo perfil'})
});

// DELETE um perfil
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE um perfil'})
});

// UPDATE um perfil
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE um perfil'})
});

module.exports = router;