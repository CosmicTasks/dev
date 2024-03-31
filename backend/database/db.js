const { Sequelize } = require("sequelize");
const {name, usu, password } = require("./configDatabase.js")


const connectionDataBase = new Sequelize(
    `mysql://${usu}:${password}@localhost:3306/${name}`
)

module.exports = { connectionDataBase }