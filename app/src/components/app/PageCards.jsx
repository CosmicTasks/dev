import React from "react";
import style from "./PageCard.module.css";
import { UilBox, UilEdit } from "@iconscout/react-unicons";

function PageCard() {
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
    </>
  );
}

export default PageCard;
