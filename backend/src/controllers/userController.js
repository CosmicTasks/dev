const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')

const ModelUser = require('./querys/queryUser');
const { callbackPromise } = require('nodemailer/lib/shared');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
      const emailResults = await ModelUser.findEmailCliente({
          params: { nm_email: email }
      });

      if (emailResults.length > 0) {
          return res.status(200).json({ message: 'Email inválido ou já está em uso'});
      } else if (!password) {
          return res.status(200).json({ message: 'A senha é inválida' });
      }

     
        let hash = await bcrypt.hash(password, 8);
        console.log(hash);
 
    
      const clienteInserido = await ModelUser.insertClient({
          params: { nm_email: email, nm_senha: hash }
      });

      return res.status(200).json({ message: 'Cadastro efetuado com sucesso' });
  } catch (error) {
      console.error('Erro no registro:', error);
      return res.status(500).json({ message: 'Erro no cadastro, tente novamente mais tarde' });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password )
try {
  const emailResults = await ModelUser.findEmailCliente({
    params: { nm_email: email }
});

if (emailResults.length === 0){
  return res.status(200).json({ message: 'email ou senha incorretos' });
}
const match = await bcrypt.compare(password, emailResults[0].nm_senha);
if(!match){
  return res.status(200).json({ message: 'email ou senha incorretos' });
}

  return res.status(202).json()

}catch(err){
  console.log(`erro interno no servidor ${err}`)
  return res.status(404).json({message:'erro interno no servidor'})
}
}
