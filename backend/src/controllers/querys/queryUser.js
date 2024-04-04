const { ModelUser } = require('../../models/tb_user')
const { Model, Op } = require('sequelize')
const { raw } = require("mysql2")

//os atributos sempre e algo que voce vai selecionar
// findEmailCliente ele e select 
// oq define a query  e que vem dps do modelUser ex=.findALL, findOne
module.exports = {
    findEmailCliente: async (req, res) => {
        const { nm_email } = req.params;
        return ModelUser.findAll({
            attributes: ['nm_email', 'nm_senha'],
            where: {
                nm_email: nm_email
            },
            raw: true
        });
    },
        //inseri as informacoes dentro sql 
    insertClient: async (req, res) => {
        const { nm_email, nm_senha } = req.params; // Assumindo que o nome da marca está no corpo da requisição
        return ModelUser.create({
            nm_email: nm_email,
            nm_senha: nm_senha
        });
    },

    //callback 
    findtokenCliente: async (req, res) => {
        try {
            const { nm_email } = req.params;
            const cliente = await ModelUser.findOne({
                attributes: ['cd_token'],
                where: {
                    nm_email: nm_email
                },
                raw: true
            });

            return cliente ? cliente.cd_token : null;

        } catch (error) {
            console.error('Erro ao buscar token por email:', error);
            // Lide com o erro de alguma forma apropriada para sua aplicação
            throw error;
        }
    },
    updateTokenByEmail: async (req, res) => {
        const { nm_email, cd_token } = req.params;
        return ModelCliente.update(
            { cd_token: cd_token },
            { where: { nm_email: nm_email } }
        );

        

    }
}