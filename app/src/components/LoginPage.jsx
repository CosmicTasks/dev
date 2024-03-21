import React from "react";
import style from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <div className={style.loginSection}>
        <div className={style.header}>
          <h2 className={style.title}>Entrar</h2>
          <h1 className={style.frase}>Bem-vindo de volta!</h1>
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
              placeholder="Insira sua senha"
            />
          </div>
          <a href="/forgot-password" className={style.forgotPassword}>Esqueceu a senha?</a>
          <button type="submit" className={`${style.submit} ${style.disabled}`}>Entrar</button>
          <p className={style.textSignup}>Ainda não possui uma conta? <a href="/signup">Cadastre-se</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
