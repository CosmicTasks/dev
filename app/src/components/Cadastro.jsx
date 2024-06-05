import style from "./Cadastro.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "./app/alert/Alert";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [iterador, setIterador] = useState(0);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const navigate = useNavigate();

  const images = [
    "/foto1.svg",
    "/foto2.svg",
    "/foto3.svg",
    "/foto4.svg",
    "/foto5.svg",
    "/foto6.svg",
    "/foto7.svg",
    "/foto8.svg",
  ];

  const validarEmail = (email) => {
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexEmail.test(email)) {
      setEmail(email);
      return true;
    } else {
      setErro("Email inválido.");
      setTimeout(() => setErro(null), 5000);
      return false;
    }
  };

  const validarNome = (nome) => {
    // Remover espaços em branco no início e no final do nome
    if (!nome) {
      return false;
    }

    nome = nome.trim();

    // Expressão regular para validar o formato do nome
    const regexNome = /^[a-zA-ZáàâãéèêẽíìîĩóòôõúùûũçÇ\s-]+$/;

    // Testa se o nome é válido
    if (regexNome.test(nome)) {
      setNome(nome);
      return true;
    } else {
      setErro("Nome inválido.");
      setTimeout(() => setErro(null), 5000);
      return false;
    }
  };

  const validarSenha = (senha, tipo) => {
    // Verifica se a senha é nula
    if (!senha) {
      return false;
    }

    // Remover espaços em branco no início e no final da senha
    senha = senha.trim();

    // Testa se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      return false;
    }

    // Testa se a senha tem pelo menos um número e uma letra
    const regexSenhaNumero = /[0-9]/;
    const regexSenhaLetra = /[a-zA-Z]/;

    if (regexSenhaNumero.test(senha) && regexSenhaLetra.test(senha)) {
      if (tipo === "senha") {
        setSenha(senha);
      } else {
        setConfirmarSenha(senha);
      }
      return true;
    } else {
      setErro("A senha deve conter pelo menos um número e uma letra.");
      setTimeout(() => setErro(null), 5000);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro(null);

    if (senha != confirmarSenha) {
      setErro("Senha e confirmação de senha não coincidem.");
      setTimeout(() => setErro(null), 5000);
      return;
    }

    const index = Math.floor(Math.random() * images.length);
    const img = images[index];

    try {
      const info = {
        nome,
        email,
        senha,
        img,
        configuracoes: { permiteEmail: true },
      };
      const response = await fetch("http://localhost:4000/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const data = await response.json();
      if (response.ok) {
        const user = JSON.stringify(data);
        localStorage.setItem("user", user);
        setSucesso("Cadastro realizado com sucesso.");
        setTimeout(() => setSucesso(null), 2000);
        setTimeout(() => navigate("/app"), 2000);
      } else {
        setErro(data.error);
        setTimeout(() => setErro(null), 5000);
      }
    } catch (error) {
      console.log(error);
      setTimeout(() => setErro("Erro ao cadastrar usuário."), 5000);
      setErro(null);
    }
  };

  const handleContinuar = () => {
    switch (iterador) {
      case 1:
        if (validarEmail(email)) return setIterador(iterador + 1);
        break;
      case 2:
        if (validarSenha(senha, "senha")) return setIterador(iterador + 1);
        break;
      default:
        if (validarNome(nome)) return setIterador(iterador + 1);
    }
  };

  return (
    <div className={style.cadastro}>
      {erro && (
        <Alert tipo={"erro"} conteudo={erro} />
      )}
      {sucesso && (
        <Alert
          tipo={"sucesso"}
          conteudo={sucesso}
        />
      )}
      <header className={style.header}>
        <Link to={"/"} className={style.brand}>
          <img src="./logo-icon.png" alt="CosmicTasks" className={style.logo} />
        </Link>
        <span className={style.login}>
          Já possui uma conta? <Link to={"/login"}>Login</Link>
        </span>
      </header>
      <div className={style.wrapper}>
        <form method="POST" onSubmit={handleSubmit} className={style.form}>
          <p className={style.text}>
            Bem-vindo ao CosmicTasks! <br /> Vamos começar a jornada.
          </p>
          <div className={style.inputGroup}>
            <label htmlFor="nome" className={style.label}>
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              className={style.input}
              placeholder="Insira seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div
            className={style.inputGroup}
            hidden={iterador >= 1 ? false : true}
          >
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={style.input}
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div
            className={style.inputGroup}
            hidden={iterador >= 2 ? false : true}
          >
            <label htmlFor="senha" className={style.label}>
              Senha
            </label>
            <input
              type="password"
              name="senha"
              id="senha"
              className={style.input}
              placeholder="Insira sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div
            className={style.inputGroup}
            hidden={iterador >= 3 ? false : true}
          >
            <label htmlFor="confirmar_senha" className={style.label}>
              Confirmar senha
            </label>
            <input
              type="password"
              name="confirmar-senha"
              id="confirmar_senha"
              className={style.input}
              placeholder="Confirme a senha"
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>
          <button
            className={style.continuar}
            type="button"
            onClick={handleContinuar}
            hidden={iterador === 3 ? true : false}
          >
            Continuar
          </button>
          <button
            className={style.cadastrar}
            type="submit"
            hidden={iterador === 3 ? false : true}
          >
            Cadastrar
          </button>
        </form>
        <footer className={style.footer}>
          <span>
            &copy; 2024 CosmicTasks. <br /> Todos os direitos reservados.
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Cadastro;
