import Header from "./Header";
import Footer from "./Footer";
import style from "./LandingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [tabAtiva, setTabAtiva] = useState("foco");

  const handleTabChange = (e) => {
    setTabAtiva(e.target.name);
  };

  const [planoAtivo, setPlanoAtivo] = useState("mensal");

  const handlePlanoChange = (e) => {
    setPlanoAtivo(e.target.id);
  };

  return (
    <div className={style.landing}>
      <Header />
      <div className={style.hero}>
        <h1 className={style.mainTitle}>
          Transforme a maneira como você estuda
        </h1>
        <p className={style.subTitle}>
          Inicie sua jornada no Cosmictasks e personalize sua experiência com
          ferramentas úteis.
        </p>
        <Link to="cadastro" className={style.button}>
          Iniciar jornada
        </Link>
        <img src="./main.png" alt="hero" className={style.heroImage} />
      </div>
      <div className={style.beneficios}>
        <h2 className={style.title}>Conheça os beneficios</h2>
        <div className={style.tabs}>
          <div className={style.tab}>
            <button
              name="foco"
              className={tabAtiva === "foco" ? style.active : ""}
              onClick={handleTabChange}
            >
              Foco
            </button>
            <button
              name="organização"
              className={tabAtiva === "organização" ? style.active : ""}
              onClick={handleTabChange}
            >
              Organização
            </button>
            <button
              name="produtividade"
              className={tabAtiva === "produtividade" ? style.active : ""}
              onClick={handleTabChange}
            >
              Produtividade
            </button>
          </div>
          {tabAtiva === "foco" && (
            <div className={style.tabContent} name="foco">
              <h1 className={style.tabTitle}>
                Pomodoro <b>Timer</b>
              </h1>
              <div className={style.textWrapper}>
                <p className={style.tabText}>
                  O CosmicTasks oferece um Pomodoro Timer integrado que facilita
                  o uso da técnica.
                </p>
                <p className={style.tabText}>
                  Basta definir o tempo de pomodoro e o tempo de pausa, e focar
                  no que é preciso.
                </p>
              </div>
            </div>
          )}

          {tabAtiva === "organização" && (
            <div className={style.tabContent} name="organização">
              <h1 className={style.tabTitle}>
                Lista de <b>Tarefas</b>
              </h1>
              <div className={style.textWrapper}>
                <p className={style.tabText}>
                  Crie listas de tarefas para organizar suas atividades diárias.
                </p>
                <p className={style.tabText}>
                  Adicione tarefas, defina prioridades e marque como concluídas.
                </p>
              </div>
            </div>
          )}
          {tabAtiva === "produtividade" && (
            <div className={style.tabContent} name="produtividade">
              <h1 className={style.tabTitle}>
                Flashcards <b>Integrados</b>
              </h1>
              <div className={style.textWrapper}>
                <p className={style.tabText}>
                  Crie flashcards para estudar e memorizar conteúdos de forma
                  eficiente.
                </p>
                <p className={style.tabText}>
                  O CosmicTasks oferece um sistema de flashcards para otimizar a
                  memorização.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={style.cardsSection}>
        <div className={style.card} id={style.card1}>
          <div className={style.icon}>
            <FontAwesomeIcon icon="calendar-check" />
          </div>
          <h3>Acompanhe rotinas</h3>
          <p>Use as rotinas para tarefas repetitivas ou hábitos.</p>
        </div>
        <div className={style.card} id={style.card2}>
          <div className={style.icon}>
            <FontAwesomeIcon icon="mobile-screen" />
          </div>
          <h3>Totalmente responsivo</h3>
          <p>
            Design adaptado para telas de diferentes tamanhos, do celular ao
            computador.
          </p>
        </div>
        <div className={style.card} id={style.card3}>
          <div className={style.icon}>
            <FontAwesomeIcon icon="palette" />
          </div>
          <h3>Diferentes temas</h3>
          <p>
            Modifique a aparência do app escolhendo um dos temas disponíveis.
          </p>
        </div>
        <div className={style.card} id={style.card4}>
          <div className={style.icon}>
            <FontAwesomeIcon icon="puzzle-piece" />
          </div>
          <h3>Tudo em um só lugar</h3>
          <p>
            CosmicTasks reúne tarefas, rotinas, timer, calendário, anotações e
            flashcards em um único website. Assim, você não precisa baixar
            diversos aplicativos diferentes.
          </p>
        </div>
        <div className={style.card} id={style.card5}>
          <div className={style.icon}>
            <FontAwesomeIcon icon="pen-to-square" />
          </div>
          <h3>Design simples e intuitivo</h3>
          <p>
            O design foi pensado para que o usuário não tenha dificuldade em
            entender o que fazer e onde clicar. São utilizadas cores
            contrastantes e ícones reconhecíveis.
          </p>
        </div>
      </div>
      <section className={style.planosSection}>
        <div className={style.header}>
          <div className={style.headerTitle}>
            <h2>Planos</h2>
            <p>Escolha o plano ideal para você</p>
          </div>
          <div className={style.headerTabs}>
            <input
              type="radio"
              id="mensal"
              name="planos"
              className={style.radioInput}
              onChange={handlePlanoChange}
              checked={planoAtivo === "mensal"}
            />
            <label htmlFor="mensal" className={style.radioLabel}>
              <span className={style.radioInnerCircle}></span>
              Mensal
            </label>
            <input
              type="radio"
              id="anual"
              name="planos"
              className={style.radioInput}
              onChange={handlePlanoChange}
              checked={planoAtivo === "anual"}
            />
            <label htmlFor="anual" className={style.radioLabel}>
              <span className={style.radioInnerCircle}></span>
              Anual
            </label>
          </div>
        </div>
        <div className={style.planosCards}>
          <div className={style.planoCard}>
            <div className={style.preco}>
              <span className={style.badge}>Gratuito</span>
              <h1>R$0</h1>
              <span>por mês</span>
            </div>
            <ul className={style.features}>
              <li>Tarefas</li>
              <li>Timer</li>
              <li>Anotações</li>
              <li>Flashcards</li>
            </ul>
            <button className={style.btn}>Começar</button>
          </div>
          <div className={style.planoCard}>
            <div className={style.preco}>
              <span className={style.badge}>Premium</span>
              <h1>R$20</h1>
              <span>por mês</span>
            </div>
            <ul className={style.features}>
              <li>Dashboard aprofundada</li>
              <li>Equipes</li>
            </ul>
            <button className={style.btn}>Começar</button>
          </div>
        </div>
      </section>
      <div className={style.chamada}>
        <h1>Foco, organização e produtividade.</h1>
        <Link to="cadastro" className={style.button}>
          Iniciar jornada
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
