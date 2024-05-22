import { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import Alert from "./app/alert/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
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
        setSucesso(true);
        window.location.replace("/app");
      } else {
        setErro(response.error);
      }
    } catch (error) {
      console.error(error);
      setErro("Erro ao realizar login.");
    }
  };

  return (
    <div className={style.login}>
      <div className={style.container}>
        <div className={style.header}>
          <img src="./logo-icon.png" alt="CosmicTasks" className={style.logo} />
          <h1 className={style.chamada}>Entrar no CosmicTasks</h1>
        </div>
        <form className={style.form} onSubmit={handleLogin}>
          <div className={style.inputGroup}>
            <label htmlFor="email" className={style.label}>
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={style.input}
              placeholder="Insira seu e-mail"
              autoFocus
              required
            />
          </div>
          <div className={style.inputGroup}>
            <label htmlFor="password" className={style.label}>
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={style.input}
              placeholder="Insira sua senha"
              required
              minLength={8}
            />
          </div>
          <button type="submit" className={style.button}>
            Entrar
          </button>
        </form>
        <div className={style.createAccount}>
          <p>
            Não tem uma conta?{" "}
            <Link to="/register" className={style.link}>
              Cadastre-se
            </Link>
          </p>
        </div>
        <footer className={style.footer}>
          <span>
            &copy; 2024 CosmicTasks. <br /> Todos os direitos reservados.
          </span>
        </footer>
        {erro && <Alert icon={"erro"} conteudo={erro} setErro={setErro} />}
        {sucesso && (
          <Alert icon={"sucesso"} conteudo={"Login realizado com sucesso!"} />
        )}
      </div>
    </div>
  );
};

export default Login;
