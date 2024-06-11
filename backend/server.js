require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Variáveis de ambiente
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/cosmic";
const port = process.env.PORT || 4000;

// Inicializar app express
const app = express();

// Configuração de CORS
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
}));

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ${req.originalUrl}`);
  next();
});

// Importar rotas
const usersRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
const cadastroRoutes = require("./routes/cadastro");
const listasRoutes = require("./routes/listas");
const tasksRoutes = require("./routes/tasks");

// Usar rotas
app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/cadastro", cadastroRoutes);
app.use("/api/listas", listasRoutes);
app.use("/api/tasks", tasksRoutes);

// Conectar ao banco de dados
mongoose.connect(uri, {
  dbName: "cosmic",
})
  .then(() => {
    console.log("Conectado ao MongoDB");

    // Iniciar o servidor
    app.listen(port, () => {
      console.log(`Servidor ouvindo na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  });
