// tipos de variaveis dentro do sequelize 
//varchar = string , char= char
const { DataTypes } = require('sequelize')
//conecta o banco de dados
const { connectionDataBase } = require('../../database/db')
const { _padraoTableDBExistence } = require('../configTable/dfTable.js')

// usa a tabela user para setar uma camada de abstracao sobre a tabela do mysql

 // allowNull = not null
const ModelUser = connectionDataBase.define('tb_user', {
    cd_user: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    nm_nome: {
        type: DataTypes.STRING,
        allowNull:true,
    },

    nm_email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    nm_senha: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    cd_token: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
},
    _padraoTableDBExistence('tb_user')
)

module.exports = {
    ModelUser
}
