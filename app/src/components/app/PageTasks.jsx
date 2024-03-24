import React, { useState } from "react";
import SecSidebar from "./SecSidebar";
import style from "./PageTasks.module.css";
import {
  UilArrowToRight,
  UilLeftArrowToLeft,
  UilSlidersV,
  UilGrid,
} from "@iconscout/react-unicons";
import useListas from "./Listas";

const PageTasks = () => {
  const [sidebar, setSidebar] = useState(true);
  const { listas, setListas, addLista } = useListas();

  return (
    <>
      <SecSidebar isOpen={sidebar} listas={listas} addLista={addLista} />
      <div className={style.tasksBody}>
        <div className={style.tasksHeader}>
          <div className={style.switchSidebarContainer}>
            {sidebar ? (
              <UilLeftArrowToLeft
                size="18"
                color="var(--c11)"
                onClick={() => setSidebar(false)}
              />
            ) : (
              <UilArrowToRight
                size="18"
                color="var(--c11)"
                onClick={() => setSidebar(true)}
              />
            )}
            <h1 className={style.listTitle}>Hoje</h1>
          </div>
          <div className={style.gridSettings}>
            <UilSlidersV size="18" color="var(--c11)" />
            <UilGrid size="18" color="var(--c11)" />
          </div>
        </div>
        {
          listas.map((lista) => (
            <div key={lista.id} className={style.lista}>
              <h1 className={style.listaTitle}>{lista.nome}</h1>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default PageTasks;
