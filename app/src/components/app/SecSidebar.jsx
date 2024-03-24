import { useState } from "react";
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
  UilSquareShape,
} from "@iconscout/react-unicons";
import ModalNewList from "./modal/ModalNewList";
import data from '@emoji-mart/data'
import { init } from 'emoji-mart'
init({ data })

const SecSidebar = ({isOpen, listas, addLista}) => {

  const [showModal, setShowModal] = useState(false);

  const handleAddLista = () => {
    setShowModal(!showModal);
  }

  return (
    <div className={`${style.secSidebar} ${isOpen ? style.open : style.close}`}>
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
          <UilPlus size="12" className={style.add} onClick={handleAddLista} />
        </div>
        {listas.map((lista, id) => (
          <button key={id} type="button" className={style.item}>
            {lista.emoji ? (
              <em-emoji id={lista.emoji} size="12" style={{ width: "16px" }} />
            ) : (
              <UilSquareShape size="16" color={lista.cor} />
            )}
            <span className={style.listName}>{lista.nome}</span>
            <span className={style.badge}>
              {lista.tarefas.length > 0 ? lista.tarefas.length : ""}
            </span>
          </button>
        ))}
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
      {showModal && (
        <ModalNewList
        addLista={addLista}
        />
      )}
    </div>
  );
};

export default SecSidebar;
