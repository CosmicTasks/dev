require("dotenv").config();

// Inicializar app express
const express = require("express");
const mongoose = require("mongoose");
const profileRoutes = require("./routes/profiles");

// Criar app express
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// rotas
app.use("/api/profiles", profileRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Ouvir requisições
    app.listen(process.env.PORT, () => {
      console.log(`ouvindo na porta ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
