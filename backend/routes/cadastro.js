const express = require("express");
const {
  cadastrarUsuario,
} = require("../controllers/cadastroController");

const router = express.Router();

// POST um novo usuario
router.post("/", cadastrarUsuario);

module.exports = router;