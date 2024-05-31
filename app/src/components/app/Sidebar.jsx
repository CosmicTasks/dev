import React from "react";
import style from "./Sidebar.module.css";
import ViteLogo from "/vite.svg";
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
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";

const Sidebar = () => {

  const userJSON = JSON.parse(localStorage.getItem("user"));

  const img = userJSON.img ? userJSON.img : ViteLogo;

  return (
    <div className={style.sidebar}>
      <div className={style.mainItems}>
        <div className={style.item}>
          <img className={style.img} src={img} alt="Perfil do usuário" />
        </div>
        <div className={style.item}>
          <NavLink to="tasks/hoje" className={style.link}>
            {({ isActive }) => (
              <UilCheckCircle
                size="1.5em"
                className={isActive ? style.active : ""}
              />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="pomo" className={style.link}>
            {({ isActive }) => (
              <UilStopwatch size="1.5em" className={isActive ? style.active : ""} />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="cards" className={style.link}>
            {({ isActive }) => (
              <UilBox size="1.5em" className={isActive ? style.active : ""} />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="notes" className={style.link}>
            {({ isActive }) => (
              <UilFileAlt size="1.5em" className={isActive ? style.active : ""} />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <UilChartPie size="1.5em" color="var(--r1)" />
        </div>
        <div className={style.item}>
          <UilSearch size="1.5em" color="var(--r1)" />
        </div>
      </div>
      <div className={style.secondaryItems}>
        <div className={style.item}>
          <UilEnvelope size="1.5em" color="var(--r1)" />
        </div>
        <div className={style.item}>
          <UilSetting size="1.5em" color="var(--r1)" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
