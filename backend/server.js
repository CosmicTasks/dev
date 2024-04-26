require("dotenv").config();
const uri = "mongodb://localhost:27017";
const port = 4000;

// Inicializar app express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Criar app express
const app = express();
app.use(cors({
  origin: "http://localhost:5173",
}));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// rotas
const usersRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
const cadastroRoutes = require("./routes/cadastro");
const listasRoutes = require("./routes/listas");
const tasksRoutes = require("./routes/tasks");

app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/cadastro", cadastroRoutes);
app.use("/api/listas", listasRoutes);
app.use("/api/tasks", tasksRoutes);

// connect to db
mongoose
  .connect(uri, { dbName: "cosmic" })
  .then(() => {
    // Ouvir requisições
    app.listen(port, () => {
      console.log(`ouvindo na porta ${port}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
