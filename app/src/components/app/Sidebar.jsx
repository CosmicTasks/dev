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

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.mainItems}>
        <div className={style.item}>
          <img className={style.img} src={ViteLogo} alt="Perfil do usuário" />
        </div>
        <div className={style.item}>
          <NavLink to="tasks" className={style.link}>
            {({ isActive }) => (
              <UilCheckCircle
                size="24"
                className={isActive ? style.active : ""}
              />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <UilStopwatch size="24" color="var(--r1)" />
        </div>
        <div className={style.item}>
          <NavLink to="cards" className={style.link}>
            {({ isActive }) => (
              <UilBox size="24" className={isActive ? style.active : ""} />
            )}
          </NavLink>
        </div>
        <div className={style.item}>
          <UilFileAlt size="24" color="var(--r1)" />
        </div>
        <div className={style.item}>
          <UilChartPie size="24" color="var(--r1)" />
        </div>
        <div className={style.item}>
          <UilSearch size="24" color="var(--r1)" />
        </div>
      </div>
      <div className={style.secondaryItems}>
        <div className={style.item}>
          <UilEnvelope size="24" color="var(--r1)" />
        </div>
        <div className={style.item}>
          <UilSetting size="24" color="var(--r1)" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
