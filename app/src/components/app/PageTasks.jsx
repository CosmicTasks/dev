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
  UilInbox,
} from "@iconscout/react-unicons";
import { useListaContext } from "../../hooks/useListaContext";
import { useTaskContext } from "../../hooks/useTaskContext";
import Tarefa from "./tarefas/Tarefa";
import ContainerTask from "./tarefas/ContainerTask";

const PageTasks = () => {
  const [sidebar, setSidebar] = useState(true);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const { listas, dispatch: dispatchListas } = useListaContext();
  const { tasks, dispatch: dispatchTasks } = useTaskContext();
  const [tipo, setTipo] = useState("hoje");

  const hoje = new Date().toISOString().split("T")[0];

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
          <Tarefa key={task._id} style={style} task={task} tipo="hoje" setTask={setTarefaSelecionada} />
        ))}
        </div>
      </div>
      {tarefaSelecionada && (
        <ContainerTask task={tarefaSelecionada} setTask={setTarefaSelecionada} />
      )}
    </>
  );
};

export default PageTasks;
