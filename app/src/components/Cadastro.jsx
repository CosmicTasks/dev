import style from "./Cadastro.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

const Cadastro = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  const [iterador, setIterador] = useState(0);
  const [ver1, setVer1] = useState(true);
  const [ver2, setVer2] = useState(true);

  const validarEmail = (email) => {
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexEmail.test(email)) {
      setEmail(email);
      return true;
    } else {
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
      return false;
    }
  };

  const validarSenha = (senha, tipo) => {
    // Remover espaços em branco da senha
    senha = senha.trim();

    // Expressão regular para validar a senha
    const regexSenha =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*\(\)_+\-=\[\]\{\};':"\\|,.<>\/?])(?=.{8,})/;

    // Testa se a senha é válida
    if (regexSenha.test(senha)) {
      tipo === "senha" ? setSenha(senha) : setConfirmarSenha(senha);
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validarSenha(confirmarSenha, "confirmar");

    if (senha != confirmarSenha) {
      return console.log("Senha e Confirmar Senha devem ser iguais.");
    }
  };

  const handleContinuar = () => {
    switch (iterador) {
      case 1:
        if (validarEmail(email)) return setIterador(iterador + 1);
        break;
      case 2:
        if (validarSenha(senha, "senha")) return setIterador(iterador + 1);
      default:
        if (validarNome(nome)) return setIterador(iterador + 1);
    }
  };

  return (
    <div className={style.cadastro}>
      <header className={style.header}>
        <Link to={"/"} className={style.brand}>
          <img src="./logo-icon.png" alt="CosmicTasks" className={style.logo} />
        </Link>
        <span className={style.login}>
          Já possui uma conta? <Link to={"/login"}>Login</Link>
        </span>
      </header>
      <div className={style.wrapper}>
        <form onSubmit={handleSubmit} className={style.form}>
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
              onChange={(e) => setNome(e.target.value)}
              required
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
              type={ver1 ? "password" : "true"}
              name="senha"
              id="senha"
              className={style.input}
              placeholder="Insira sua senha"
              onChange={(e) => setSenha(e.target.value)}
              required
              minLength={8}
            />
            {ver1 ? (
              <UilEye
                size="1.5em"
                color="var(--c1)"
                onClick={() => setVer1(false)}
                className={style.eye}
              />
            ) : (
              <UilEyeSlash
                size="1.5em"
                color="var(--c1)"
                onClick={() => setVer1(true)}
                className={style.eye}
              />
            )}
          </div>
          <div
            className={style.inputGroup}
            hidden={iterador >= 3 ? false : true}
          >
            <label htmlFor="confirmar-senha" className={style.label}>
              Confirmar senha
            </label>
            <input
              type={ver2 ? "password" : "true"}
              name="confirmar-senha"
              id="confirmar-senha"
              className={style.input}
              placeholder="Confirme a senha"
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              minLength={8}
            />
            {ver2 ? (
              <UilEye
                size="1.5em"
                color="var(--c1)"
                onClick={() => setVer2(false)}
                className={style.eye}
              />
            ) : (
              <UilEyeSlash
                size="1.5em"
                color="var(--c1)"
                onClick={() => setVer2(true)}
                className={style.eye}
              />
            )}
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
      </div>
    </div>
  );
};

export default Cadastro;
