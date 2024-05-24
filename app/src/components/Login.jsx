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
    setErro(null);
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
        setTimeout(() => {
          setSucesso(null);
          window.location.replace("/app");
        }, 2000);
      } else {
        setErro(data.error);
        setTimeout(() => setErro(null), 5000);
      }
    } catch (error) {
      console.error(error);
      setTimeout(() => setErro("Erro ao realizar login."), 5000);
      setErro(null);
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setSenha(e.target.value)}
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
            <Link to="/cadastro" className={style.link}>
              Cadastre-se
            </Link>
          </p>
        </div>
        <footer className={style.footer}>
          <span>
            &copy; 2024 CosmicTasks. <br /> Todos os direitos reservados.
          </span>
        </footer>
        {erro && (
          <Alert tipo={"erro"} conteudo={erro} onClick={() => setErro(null)} />
        )}
        {sucesso && (
          <Alert
            tipo={"sucesso"}
            conteudo={"Login realizado com sucesso!"}
            onClick={() => setSucesso(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
