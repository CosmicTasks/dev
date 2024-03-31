const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')

const ModelUser = require('./querys/queryUser')

exports.register = async (req, res) => {
    const { name, email, cpf, senha, senhaConfirm } = req.body;
    const cpfNumerico = cpf.replace(/\D/g, '');

    const emailResults = await ModelUser.findEmailCliente({
      params: { nm_email: email }
    });

    if (emailResults.length > 0) {
      return res.status(200).json({
        message: 'Email inválido ou já está em uso'
      });
    } else if (senha !== senhaConfirm) {
      return res.status(200).json({ message: 'As senhas estão incorretas' });
    }

    const cpfResults = await controller_User.findcpfCliente({
      params: { cd_cpfCliente: cpfNumerico }
    });

    if (cpfResults.length > 0) {
      return res.status(200).json({
        message: 'Alguns dos dados já estão sendo utilizado'
      });
    }
}