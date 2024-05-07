import { useState } from "react";
import style from "./LoginPage.module.css";
import astronauta from "../assets/astronauta.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginPage = ({ acao }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [disabled, setDisabled] = useState(style.disabled);

  const handleChange = (e) => {
    if (acao === "login") {
      if (e.target.validity.valid && senha.length >= 8) {
        setDisabled("");
      } else {
        setDisabled(style.disabled);
      }
    }
    if (acao === "cadastro") {
      if (e.target.validity.valid && senha.length >= 8 && nome.length > 0) {
        setDisabled("");
      } else {
        setDisabled(style.disabled);
      }
    }
  };

  const handleLogin = async () => {
    setErro("");
    try {
      const info = { email, senha };
      const response = await fetch("http://localhost:4000/api/login", {
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
        window.location.replace("/app");
      } else {
        setErro(response.error);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login.");
    }
  };

  const handleCadastro = async () => {
    setErro(false);
    try {
      const info = {
        nome,
        email,
        senha,
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
        console.log('Usuario criado: ', user);
        localStorage.setItem("user", user);
        window.location.replace("/app");
      } else {
        setErro(data.error || response.statusText || response.status.toString);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (acao === "login") {
      handleLogin();
    }
    if (acao === "cadastro") {
      handleCadastro();
    }
  };

  const login = (
    <div className={`row ${style.loginContainer}`}>
      {/* Image */}
      <div
        className={`col-md-6 d-flex justify-content-center flex-column align-items-center ${style.imgContainer}`}
      >
        <img
          src={astronauta}
          alt="Desenho de um astronauta flutuando."
          className={`img-fluid w-75 d-block`}
        />
      </div>
      <div className={`col-md-6 p-5 rounded-0 ${style.section}`}>
        <div className={style.header}>
          <h2 className={style.title}>Entrar</h2>
          <h1 className={style.frase}>Bem-vindo de volta!</h1>
        </div>
        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.inputGroup}>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={style.input}
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleChange(e);
              }}
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="password" className={style.label}>
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={style.input}
              placeholder="Insira sua senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
              minLength="8"
            />
          </div>
          {erro && (
            <p className={style.error}>
              {erro}
            </p>
          )}
          <button type="submit" className={`${style.submit} ${disabled}`}>
            Entrar
          </button>
          <p className={style.textSignup}>
            Ainda não possui uma conta?{" "}
            <Link to={`/cadastro`}>Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );

  const cadastro = (
    <div className={`row ${style.loginContainer}`}>
      <div className={`col-md-6 p-5 rounded-0 ${style.section}`}>
        <div className={style.header}>
          <h2 className={style.title}>Cadastrar</h2>
          <h1 className={style.frase}>Comece sua jornada!</h1>
        </div>
        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.inputGroup}>
            <label htmlFor="name" className={style.label}>
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={style.input}
              placeholder="Insira seu nome"
              onChange={(e) => setNome(e.target.value)}
              minLength="1"
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={style.input}
              placeholder="exemplo@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="password" className={style.label}>
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={style.input}
              placeholder="Crie uma senha forte"
              onChange={(e) => setSenha(e.target.value)}
              minLength="8"
            />
          </div>
          {erro && (
            <p className={style.error}>
              {erro}
            </p>
          )}
          <button type="submit" className={`${style.submit} ${disabled}`}>
            Cadastrar
          </button>
          <p className={style.textSignup}>
            Já possui uma conta? <Link to={`/login`}>Conecte-se</Link>
          </p>
        </form>
      </div>
      {/* Image */}
      <div
        className={`col-md-6 d-flex justify-content-center flex-column align-items-center ${style.imgContainer}`}
      >
        <img
          src={astronauta}
          alt="Desenho de um astronauta flutuando."
          className={`img-fluid w-75 d-block`}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Main container */}
      <div
        className={`container-fluid d-flex justify-content-center align-items-center min-vh-100 ${style.container}`}
      >
        {/* Login container */}
        {acao === "login" ? login : cadastro}
      </div>
    </>
  );
};

LoginPage.propTypes = {
  acao: PropTypes.string,
};

LoginPage.defaultProps = {
  acao: "login",
};

export default LoginPage;
