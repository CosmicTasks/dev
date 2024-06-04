import { useState} from "react";
import PropTypes from "prop-types";
import style from "./SecSidebar.module.css";
import {
  UilPlus,
  UilSun,
  UilInbox,
  UilCheckCircle,
  UilExclamationCircle,
  UilTrashAlt,
} from "@iconscout/react-unicons";
import ModalNewList from "./modal/ModalNewList";
import ModalNewTask from "./modal/ModalNewTask";
import BtnListas from "./listas/BtnListas";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
init({ data });
import { useListaContext } from "../../hooks/useListaContext";
import { NavLink } from "react-router-dom";

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
        <button type="button" className={`${style.item} ${style.add}`} onClick={handleAddTask}>
          <UilPlus size="1em" />
          <span className={style.listName}>Adicionar tarefa</span>
        </button>
        <NavLink
          to="/app/tasks/hoje"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilSun size="1em" />
          <span className={style.listName}>Hoje</span>
        </NavLink>
        <NavLink
          to="/app/tasks/entrada"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilInbox size="1em" />
          <span className={style.listName}>Entrada</span>
        </NavLink>
        <NavLink
          to="/app/tasks/concluidas"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilCheckCircle size="1em"/>
          <span className={style.listName}>Concluídas</span>
        </NavLink>
        <NavLink
          to="/app/tasks/atrasadas"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilExclamationCircle size="1em"/>
          <span className={style.listName}>Atrasadas</span>
        </NavLink>
        <NavLink
          to="/app/tasks/excluidas"
          className={({ isActive }) =>
            isActive ? `${style.active} ${style.item}` : `${style.item}`
          }
        >
          <UilTrashAlt size="1em" />
          <span className={style.listName}>Excluídas</span>
        </NavLink>
      </div>
      <hr className={style.divider} />
      {listas && listas.length != 0 ? (
        <>
          <div className={style.listas}>
            <div className={style.headerItems}>
              <div className={style.accordion}>Listas</div>
              <UilPlus
                size="1em"
                className={style.add}
                onClick={handleAddLista}
              />
            </div>
            {listas.map((lista) => (
              <BtnListas key={lista._id} lista={lista} style={style} />
            ))}
          </div>
          <hr className={style.divider} />
        </>
      ) : (
        <button type="button" className={`${style.item} ${style.add}`} onClick={handleAddLista}>
          <UilPlus size="1em" />
          <span className={style.listName}>Adicionar lista</span>
        </button>
      )}

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
