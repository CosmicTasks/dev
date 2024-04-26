const express = require("express");
const {
  getListas,
  postLista,
} = require("../controllers/listaController");

const router = express.Router();

// GET todas as listas
router.get("/:id", getListas);

// POST uma nova lista
router.post("/", postLista);

module.exports = router;