require("dotenv").config();
const uri = "mongodb+srv://cosmicdb:cosmicpassword@cosmicserver.xz0bish.mongodb.net/?retryWrites=true&w=majority&appName=CosmicServer";
const port = 4000;

// Inicializar app express
const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
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
app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);

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
