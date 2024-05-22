import { useState } from "react";
import style from "./Login.module.css";
import astronauta from "../assets/astronauta.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={style.login}>
        <div className={style.header}>
            <img src="./logo-cinza.png" alt="CosmicTasks" className={style.logo} />
            <h1 className={style.chamada}>Entrar</h1>
        </div>
        <form className={style.form}>
            <div className={style.inputGroup}>
            <label htmlFor="email" className={style.label}>E-mail</label>
            <input type="email" name="email" id="email" className={style.input} />
            </div>
            <div className={style.inputGroup}>
            <label htmlFor="password" className={style.label}>Senha</label>
            <input type="password" name="password" id="password" className={style.input} />
            </div>
            <button type="submit" className={style.button} >Entrar</button>
        </form>
        <div className={style.createAccount}>
            <p>Não tem uma conta? <Link to="/register" className={style.link}>Cadastre-se</Link></p>
        </div>
        <footer className={style.footer}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ea deserunt cumque architecto minus natus sed iusto at vitae molestiae maxime exercitationem sequi atque dolorum sapiente officiis eligendi dignissimos. Voluptatum?
        </footer>
    </div>
  )
}

export default Login