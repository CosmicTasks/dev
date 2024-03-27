const app = require('./config/express');
const {connectionDataBase} = require("./database/db.js");
const authController = require("./routes/auth.js");
//usar parametros dps do /auth
app.use('/auth', authController);

(async () => {
    await connectionDataBase.sync()

    connectionDataBase.authenticate().then(() => {
      console.log("Conexão bem sucedida")
  }).catch(erroConn => {
      console.error("Incapaz de fazer conexão", erroConn)
  })


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
})();