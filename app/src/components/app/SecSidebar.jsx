import React from "react";
import style from "./SecSidebar.module.css";
import {
  UilPlus,
  UilSun,
  UilInbox,
  UilCalendarAlt,
  UilPuzzlePiece,
  UilAngleDown,
} from "@iconscout/react-unicons";

const SecSidebar = () => {
  return (
    <div className={style.secSidebar}>
      <div className={style.mainItems}>
        <button className={style.item}>
          <UilPlus size="18" color="var(--r9)" />
          <span>Adicionar tarefa</span>
        </button>
        <button className={style.item}>
          <UilSun size="18" color="var(--c10)" />
          <span>Hoje</span>
        </button>
        <button className={style.item}>
          <UilInbox size="18" color="var(--c10)" />
          <span>Entrada</span>
        </button>
        <button className={style.item}>
          <UilCalendarAlt size="18" color="var(--c10)" />
          <span>Calendário</span>
        </button>
        <button className={style.item}>
          <UilPuzzlePiece size="18" color="var(--c10)" />
          <span>Hábitos</span>
        </button>
      </div>
      <hr className={style.divider} />
      <div className={style.userItems}>
        <ul className={style.listas}>
          <span>
            <div>
              <UilAngleDown size="12" /> Listas
            </div>
            <UilPlus size="12" />
          </span>
        </ul>
      </div>
    </div>
  );
};

export default SecSidebar;
