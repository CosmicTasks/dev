import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "./LandingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className={style.hero}>
        <h1 className={style.mainTitle}>
          Transforme a maneira como você estuda
        </h1>
        <p className={style.subTitle}>
          Inicie sua jornada no Cosmictasks e personalize sua experiência com
          ferramentas úteis.
        </p>
        <a  className={style.button}>
          Iniciar jornada
        </a>
        <img
          src="https://placehold.co/1400x800"
          alt="hero"
          className={style.heroImage}
        />
      </div>
      <div className={style.beneficios}>
        <h2 className={style.title}>Conheça os beneficios</h2>
        <div className={style.tabs}>
          <div className={style.tab}>
            <button className={style.active}>Foco</button>
            <button>Organização</button>
            <button>Produtividade</button>
          </div>
          <div className={style.tabContent}>
            <h1 className={style.tabTitle}>
              Pomodoro <b>Timer</b>
            </h1>
            <div className={style.textWrapper}>
              <p className={style.tabText}>
                O CosmicTasks oferece um Pomodoro Timer integrado que facilita o
                uso da técnica.
              </p>
              <p className={style.tabText}>
                Basta definir o tempo de pomodoro e o tempo de pausa, e focar no
                que é preciso.
              </p>
            </div>
          </div>
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
        <p>Modifique a aparência do app escolhendo um dos temas disponíveis.</p>
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
          entender o que fazer e onde clicar. São utilizadas cores contrastantes
          e ícones reconhecíveis.
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
            id="radio1"
            name="planos"
            className={style.radioInput}
          />
          <label htmlFor="radio1" className={style.radioLabel}>
            <span className={style.radioInnerCircle}></span>
            Mensal
          </label>
          <input
            type="radio"
            id="radio2"
            name="planos"
            className={style.radioInput}
          />
          <label htmlFor="radio2" className={style.radioLabel}>
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
      <button>Iniciar jornada</button>
    </div>
    <Footer />
    </>
  );
};

export default LandingPage;