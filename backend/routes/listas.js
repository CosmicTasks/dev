const express = require("express");
const {
  getLista,
  getListas,
  postLista,
  updateLista
} = require("../controllers/listaController");

const router = express.Router();

// GET uma lista
router.get("/unica/:id", getLista);

// GET todas as listas
router.get("/:id", getListas);

// POST uma nova lista
router.post("/", postLista);

// UPDATE uma lista
router.put("/:id", updateLista);

module.exports = router;