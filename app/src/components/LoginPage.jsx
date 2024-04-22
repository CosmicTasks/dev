import { useState } from "react";
import style from "./LoginPage.module.css";
import astronauta from "../assets/astronauta.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LoginPage = ({ acao }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const user = { email, senha };
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      response.ok ? window.location.replace("/app") : alert("Erro ao logar");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
        <form
          action=""
          className={style.form}
          onSubmit={(e) => handleSubmit(e)}
        >
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
              placeholder="Insira sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <a href="/forgot-password" className={style.forgotPassword}>
            Esqueceu a senha?
          </a>
          <button type="submit" className={`${style.submit} ${style.disabled}`}>
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
        <form action="" className={style.form}>
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
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className={`${style.submit} ${style.disabled}`}
          >
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
