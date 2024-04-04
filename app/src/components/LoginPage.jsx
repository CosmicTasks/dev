import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LoginPage.module.css";
import astronauta from "../assets/astronauta.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ acao }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await axios.post(
        acao === "login" ? "http://localhost:5000/auth/login" : "http://localhost:5000/auth/register",
        formData
      );
      if (resposta.status === 200) {
        setMessage(resposta.data.message);
      } else if (resposta.status === 202 && acao === "login") {
        navigate('/'); //colocar qual a pagina para quando entra ele direcionar pra home 
      }
    } catch (error) {
      console.log(error);
      setMessage(acao === "login" ? "Erro no login" : "Erro no cadastro");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={`container-fluid d-flex justify-content-center align-items-center min-vh-100 ${style.container}`}>
        {acao === "login" ? (
          <div className={`row ${style.loginContainer}`}>
            <div className={`col-md-6 d-flex justify-content-center flex-column align-items-center ${style.imgContainer}`}>
              <img src={astronauta} alt="Desenho de um astronauta flutuando." className={`img-fluid w-75 d-block`} />
            </div>
            <div className={`col-md-6 p-5 rounded-0 ${style.section}`}>
              <div className={style.header}>
                <h2 className={style.title}>Entrar</h2>
                <h1 className={style.frase}>Bem-vindo de volta!</h1>
              </div>
              <form onSubmit={formSubmit} className={style.form}>
                <div className={style.inputGroup}>
                  <label htmlFor="email" className={style.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={style.input}
                    placeholder="exemplo@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="password" className={style.label}>Senha</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={style.input}
                    placeholder="Insira sua senha"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <a href="/forgot-password" className={style.forgotPassword}>Esqueceu a senha?</a>
                <button type="submit" className={`${style.submit} ${style.disabled}`}>Entrar</button>
                <p className={style.textSignup}>Ainda não possui uma conta? <Link to={`/cadastro`}>Cadastre-se</Link></p>
              </form>
              {message && <div className="container-mensagem-erro">{message}</div>}
            </div>
          </div>
        ) : (
          <div className={`row ${style.loginContainer}`}>
            <div className={`col-md-6 p-5 rounded-0 ${style.section}`}>
              <div className={style.header}>
                <h2 className={style.title}>Cadastrar</h2>
                <h1 className={style.frase}>Comece sua jornada!</h1>
              </div>
              <form onSubmit={formSubmit} className={style.form}>
                <div className={style.inputGroup}>
                  <label htmlFor="email" className={style.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={style.input}
                    placeholder="exemplo@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={style.inputGroup}>
                  <label htmlFor="password" className={style.label}>Senha</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={style.input}
                    placeholder="Crie uma senha forte"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={`${style.submit} ${style.disabled}`}>Cadastrar</button>
                <p className={style.textSignup}>Já possui uma conta? <Link to={`/login`}>Conecte-se</Link></p>
              </form>
              {message && <div className="container-mensagem-erro">{message}</div>}
            </div>
            <div className={`col-md-6 d-flex justify-content-center flex-column align-items-center ${style.imgContainer}`}>
              <img src={astronauta} alt="Desenho de um astronauta flutuando." className={`img-fluid w-75 d-block`} />
            </div>
          </div>
        )}
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
