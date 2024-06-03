import React, { useState } from "react";
import style from "./PageCard.module.css";
import { UilBox, UilEdit } from "@iconscout/react-unicons";
import logo from "../../assets/logo-cinza.png";
import Deck from "./flashcards/components/Deck";

function PageCard() {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <>
      <div className={style.caixasBody}>
        <div className={style.caixa}>
          <h1 className={style.tituloCaixa}>Vocabulário Francês</h1>
          <span className={style.descCaixa}>2 cartões, 2 para hoje</span>
          <ul className={style.listaCaixas}>
            <li>
              <UilBox size="16" color="var(--r7)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
          </ul>
        </div>
        <div className={style.caixa}>
          <h1 className={style.tituloCaixa}>Vocabulário Francês</h1>
          <span className={style.descCaixa}>2 cartões, 2 para hoje</span>
          <ul className={style.listaCaixas}>
            <li>
              <UilBox size="16" color="var(--r7)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
            <li>
              <UilBox size="16" color="var(--c6)" />
            </li>
          </ul>
        </div>
      </div>
      {selectedCard ? (
        <div className={style.cardInfo}>
          <div className={style.cardHeader}>
            <h1 className={style.cardTitle}>Vocabulário Francês</h1>
          </div>
          <div className={style.wrapperNiveis}>
            <div className={style.nivel}>
              <span>2</span>
              <UilBox size="18" color="var(--r7)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
          </div>
          <div className={style.secHeader}>
            <h2 className={style.cardSecTitle}>
              Cartões na caixa: <span className={style.qtdCards}>2</span>
            </h2>
            <button className={style.addCard}>Novo cartão</button>
          </div>
          <div className={style.wrapperEstudar}>
            <h1 className={style.qtdEstudar}>0/2</h1>
            <button className={style.btnEstudar}>Estudar cartões</button>
          </div>
          <div className={style.wrapperTabs}>
            <div className={style.nav}>
              <button className={`${style.tab} ${style.active}`}>Hoje</button>
              <button className={style.tab}>Atuais</button>
              <button className={style.tab}>Concluídas</button>
            </div>
            <div className={style.tarefas}>
              <div className={style.tarefa}>
                <span className={style.tarefaTitle}>Vouloir</span>
                <UilEdit size="14" color="var(--r12)" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.noCardSelected}>
          <img className={style.img} src={logo} alt="Logo" />
          <p className={style.infoText}>
            Clique em uma caixa para ver mais informações
          </p>
        </div>


      )}

   
    </>
  );
}

export default PageCard;
