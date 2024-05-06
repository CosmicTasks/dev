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
import { useUserContext } from "../../hooks/useUserContext";
import { useTaskContext } from "../../hooks/useTaskContext";
import { NavLink } from "react-router-dom";

const SecSidebar = ({ isOpen, tipo }) => {
  const { listas } = useListaContext();
  const { user } = useUserContext();
  const { dispatch } = useTaskContext();

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
        <NavLink
          to="/app/tasks/hoje"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilSun size="18" color="var(--c10)" />
          <span className={style.listName}>Hoje</span>
        </NavLink>
        <NavLink
          to="/app/tasks/entrada"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilInbox size="18" color="var(--c10)" />
          <span className={style.listName}>Entrada</span>
        </NavLink>
        <NavLink
          to="/app/tasks/concluidas"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilCheckCircle size="18" color="var(--c10)" />
          <span className={style.listName}>Concluídas</span>
        </NavLink>
        <NavLink
          to="/app/tasks/atrasadas"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilExclamationCircle size="18" color="var(--c10)" />
          <span className={style.listName}>Atrasadas</span>
        </NavLink>
        <NavLink
          to="/app/tasks/excluidas"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilTrashAlt size="18" color="var(--c10)" />
          <span className={style.listName}>Excluídas</span>
        </NavLink>
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
      <hr className={style.divider} />
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
