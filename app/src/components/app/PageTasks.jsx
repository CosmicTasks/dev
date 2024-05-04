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
import fetchTasks from "./tarefas/FetchTasks";

const PageTasks = ({tipo}) => {
  const [sidebar, setSidebar] = useState(true);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const { listas, dispatch: dispatchListas } = useListaContext();
  const { tasks, dispatch: dispatchTasks } = useTaskContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetchTasks(user, listas, tipo, dispatchTasks);
  }, [listas, tipo, dispatchTasks]);

  return (
    <>
      <SecSidebar isOpen={sidebar}/>
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
          {tasks &&
            tasks.map((task) => (
              <Tarefa
                key={task._id}
                style={style}
                task={task}
                setTask={setTarefaSelecionada}
              />
            ))}
        </div>
      </div>
      {tarefaSelecionada && (
        <ContainerTask
          task={tarefaSelecionada}
          setTask={setTarefaSelecionada}
        />
      )}
    </>
  );
};

export default PageTasks;
