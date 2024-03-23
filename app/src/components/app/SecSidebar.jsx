import React from "react";
import style from "./SecSidebar.module.css";
import {
  UilPlus,
  UilSun,
  UilInbox,
  UilCalendarAlt,
  UilPuzzlePiece,
  UilAngleDown,
  UilTagAlt,
  UilCheckCircle,
  UilExclamationCircle,
  UilTrashAlt,
} from "@iconscout/react-unicons";
import Listas from "./Listas";

const SecSidebar = () => {
  return (
    <div className={style.secSidebar}>
      <div className={style.mainItems}>
        <button type="button" className={style.item}>
          <UilPlus size="18" color="var(--r9)" />
          <span className={style.listName}>Adicionar tarefa</span>
        </button>
        <button type="button" className={style.item}>
          <UilSun size="18" color="var(--c10)" />
          <span className={style.listName}>Hoje</span>
        </button>
        <button type="button" className={style.item}>
          <UilInbox size="18" color="var(--c10)" />
          <span className={style.listName}>Entrada</span>
        </button>
        <button type="button" className={style.item}>
          <UilCalendarAlt size="18" color="var(--c10)" />
          <span className={style.listName}>Calendário</span>
        </button>
        <button type="button" className={style.item}>
          <UilPuzzlePiece size="18" color="var(--c10)" />
          <span className={style.listName}>Hábitos</span>
        </button>
      </div>
      <hr className={style.divider} />
      <div className={style.listas}>
        <div className={style.headerItems}>
          <div className={style.accordion}>
            <UilAngleDown size="12" /> Listas
          </div>
          <UilPlus size="12" className={style.add} />
        </div>
        <Listas style={style} />
      </div>

      <div className={style.categorias}>
        <div className={style.headerItems}>
          <div className={style.accordion}>
            <UilAngleDown size="12" /> Categorias
          </div>
          <UilPlus size="12" className={style.add} />
        </div>
        <button type="button" className={style.item}>
          <UilTagAlt size="18" color="var(--vermelho)" />
          <span className={style.listName}>Provas</span>
        </button>
      </div>
      <hr className={style.divider} />
      <div className={style.secItems}>
        <button type="button" className={style.item}>
          <UilCheckCircle size="18" color="var(--c10)" />
          <span className={style.listName}>Concluídas</span>
        </button>
        <button type="button" className={style.item}>
          <UilExclamationCircle size="18" color="var(--c10)" />
          <span className={style.listName}>Atrasadas</span>
        </button>
        <button type="button" className={style.item}>
          <UilTrashAlt size="18" color="var(--c10)" />
          <span className={style.listName}>Excluídas</span>
        </button>
      </div>
    </div>
  );
};

export default SecSidebar;
