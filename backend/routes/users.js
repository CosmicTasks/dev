const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const veriftToken = require('../middlewares/verifyToken');

const router = express.Router();

// GET todos os usuarios e protegidos
router.get("/", veriftToken, getUsers);

// GET um usuario
router.get("/:id", veriftToken, getUser);

// POST um novo usuario
router.post("/", veriftToken, createUser);

// DELETE um usuario
router.delete("/:id", veriftToken, deleteUser);

// UPDATE um usuario
router.patch("/:id", veriftToken, updateUser);

module.exports = router;
