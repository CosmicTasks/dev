import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  UilCheckCircle,
  UilStopwatch,
  UilBox,
  UilFileAlt,
  UilChartPie,
  UilSearch,
  UilEnvelope,
  UilSetting,
} from "@iconscout/react-unicons";
import Modalconfig from "./modal/ModalConfig"; // Certifique-se de que o caminho está correto

import style from "./Sidebar.module.css";

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar se o modal está aberto ou fechado
  const userJSON = JSON.parse(localStorage.getItem("user"));

  // Função para abrir ou fechar o modal
  const toggleModal = () => {
    setModalOpen(!modalOpen); // Inverte o estado atual do modal
  };

  const navigate = useNavigate();

  return (
    <div className={style.sidebar}>
      <div className={style.mainItems}>
        <div className={style.item}></div>
        <div className={style.item}>
          <NavLink to="tasks" className={style.link}>
            {({ isActive }) => (
              <UilCheckCircle
                size="1.5rem"
                className={isActive ? style.active : ""}
              />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="pomo" className={style.link}>
            {({ isActive }) => (
              <UilStopwatch size="1.5rem" className={isActive ? style.active : ""} />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="cards" className={style.link}>
            {({ isActive }) => (
              <UilBox size="1.5rem" className={isActive ? style.active : ""} />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="notes" className={style.link}>
            {({ isActive }) => (
              <UilFileAlt size="1.5rem" className={isActive ? style.active : ""} />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <UilChartPie size="1.5rem" color="var(--r1)" />
        </div>
        <div className={style.item}>
          <UilSearch size="1.5rem" color="var(--r1)" />
        </div>
      </div>
      <div className={style.secondaryItems}>
        <div className={style.item}>
          <UilEnvelope size="1.5rem" color="var(--r1)" />
        </div>
        <div className={style.item} onClick={toggleModal}>
          <UilSetting size="1.5rem" color="var(--r1)" />
        </div>
      </div>
      {/* Renderiza o modal se o estado modalOpen for true */}
      {modalOpen && (
        <Modalconfig
          onClose={toggleModal} // Passa a função toggleModal para fechar o modal
          loggedIn={true} // ou false conforme sua lógica de autenticação
          onLogout={() => {
            // Função de logout
            localStorage.removeItem("user");
            navigate("/login");
          }}
          onChangeAvatar={() => console.log("Change Avatar")} // Função para mudar o avatar
        />
      )}
    </div>
  );
};

export default Sidebar;
