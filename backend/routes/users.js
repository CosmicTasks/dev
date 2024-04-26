const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

// GET todos os usuarios
router.get("/", getUsers);

// GET um usuario
router.get("/:id", getUser);

// POST um novo usuario
router.post("/", createUser);

// DELETE um usuario
router.delete("/:id", deleteUser);

// UPDATE um usuario
router.patch("/:id", updateUser);

module.exports = router;
