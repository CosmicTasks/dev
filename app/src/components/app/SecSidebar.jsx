import { useState, useContext } from "react";
import PropTypes from "prop-types";
import style from "./SecSidebar.module.css";
import {
  UilPlus,
  UilSun,
  UilInbox,
  UilCalendarAlt,
  UilPuzzlePiece,
  UilAngleUp,
  UilAngleDown,
  UilTagAlt,
  UilCheckCircle,
  UilExclamationCircle,
  UilTrashAlt,
  UilSquareShape,
} from "@iconscout/react-unicons";
import ModalNewList from "./modal/ModalNewList";
import ModalNewTask from "./modal/ModalNewTask";
import BtnListas from "./listas/BtnListas";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
init({ data });
import { useListaContext } from "../../hooks/useListaContext";

const SecSidebar = ({ isOpen }) => {
  const { listas } = useListaContext();

  const [showModalNewList, setShowModalNewList] = useState(false);
  const [showModalNewTask, setShowModalNewTask] = useState(false);

  const handleAddLista = () => {
    setShowModalNewTask(false);
    setShowModalNewList(!showModalNewList);
  };

  const handleAddTask = () => {
    setShowModalNewList(false);
    setShowModalNewTask(!showModalNewTask);
  };

  return (
    <div className={`${style.secSidebar} ${isOpen ? style.open : style.close}`}>
      <div className={style.mainItems}>
        <button type="button" className={style.item} onClick={handleAddTask}>
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
          <div className={style.accordion}>Listas</div>
          <UilPlus size="12" className={style.add} onClick={handleAddLista} />
        </div>
        {listas &&
          listas.map((lista) => (
            <BtnListas key={lista._id} lista={lista} style={style} />
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
      {showModalNewList && (
        <ModalNewList setShowModalNewList={setShowModalNewList} />
      )}
      {showModalNewTask && (
        <ModalNewTask setShowModalNewTask={setShowModalNewTask} />
      )}
    </div>
  );
};

SecSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default SecSidebar;
