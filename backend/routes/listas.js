const express = require("express");
const {
  getListas,
  postLista,
  updateLista
} = require("../controllers/listaController");

const router = express.Router();

// GET todas as listas
router.get("/:id", getListas);

// POST uma nova lista
router.post("/", postLista);

// UPDATE uma lista
router.put("/:id", updateLista);

module.exports = router;