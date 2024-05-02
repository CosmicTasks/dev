import { useState, useEffect } from "react";
import SecSidebar from "./SecSidebar";
import style from "./PageTasks.module.css";
import {
  UilArrowToRight,
  UilLeftArrowToLeft,
  UilSlidersV,
  UilGrid,
  UilAngleDown,
  UilCircle,
} from "@iconscout/react-unicons";
import { useListaContext } from "../../hooks/useListaContext";
import { useTaskContext } from "../../hooks/useTaskContext";
import Tarefa from "./tarefas/Tarefa";

const PageTasks = () => {
  const [sidebar, setSidebar] = useState(true);
  const { listas, dispatch: dispatchListas } = useListaContext();
  const { tasks, dispatch: dispatchTasks } = useTaskContext();

  const hoje = new Date().toISOString().split("T")[0];
  //const tasksHoje = tasks.filter((task) => task.data === hoje);

  return (
    <>
      <SecSidebar isOpen={sidebar} listas={listas} />
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
        <div className={style.taskWrapper}>
        {tasks && tasks.map((task) => (
          <Tarefa key={task.id} style={style} task={task} tipo="hoje" />
        ))}
        </div>
        {/* {listas.map((lista) => (
          <div key={lista.id} className={style.lista}>
            <div className={style.listaHeader}>
              <UilAngleDown size="12" color="var(--c11)" />
              <span className={style.listaNome}>{lista.nome}</span>
            </div>
            {lista.tarefas.map((tarefa) => (
              <div key={tarefa.id} className={style.tarefa}>
                <div className={style.tarefaCheck} >
                  <UilCircle size="18" color="var(--c11)" />
                  <span className={style.tarefaNome}>{tarefa.nome}</span>
                </div>
                <div className={style.tarefaOptions}>
                  <span className={style.tarefaOptionsLista}>{lista.nome}</span>
                  <span className={style.tarefaOptionsData}>{tarefa.data}</span>
                </div>
              </div>
            ))}
          </div>
        ))} */}
      </div>
    </>
  );
};

export default PageTasks;
