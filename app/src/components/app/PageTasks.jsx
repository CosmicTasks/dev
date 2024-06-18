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
import { useParams } from "react-router-dom";

const PageTasks = ({ tipo }) => {
  const [sidebar, setSidebar] = useState(true);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const { listas, dispatch: dispatchListas } = useListaContext();
  const { dispatch: dispatchTasks } = useTaskContext();
  const { idLista } = useParams();
  const [lista, setLista] = useState(null);
  const [tipoNome, setTipoNome] = useState(null);

  const concluirTarefa = async (id) => {
    const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Concluída",
        dataConclusao: new Date(),
      }),
    });
    if (response.ok) {
      const data = await response.json();
      dispatchTasks({ type: "REMOVE_TASK", payload: data });
    } else {
      console.log("Erro ao concluir tarefa");
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const fetchTasks = async () => {
      const response = await fetch(
        `http://localhost:4000/api/tasks/${user._id}?list=${tipo}&idLista=${idLista} `,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        if (listas) {
          const tasksNomeLista = data.map((task) => {
            const lista = listas.find((lista) => lista._id === task.lista);
            return {
              ...task,
              nomeLista: lista.nome,
              corLista: lista.cor,
              emojiLista: lista.emoji,
            };
          });
          dispatchTasks({ type: "SET_TASKS", payload: tasksNomeLista });
        } else {
          console.log("Erro ao buscar listas no fetchTasks de PageTasks");
        }
      } else {
        console.log("Erro ao buscar tarefas");
      }
    };

    const fetchLista = async () => {
      const response = await fetch(
        `http://localhost:4000/api/listas/unica/${idLista}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setLista(data);
      } else {
        console.log("Erro ao buscar listas");
      }
    };

    fetchTasks();
    if (idLista) {
      fetchLista();
    }

    switch (tipo) {
      case "hoje":
        setTipoNome("Hoje");
        break;
      case "entrada":
        setTipoNome("Entrada");
        break;
      case "concluidas":
        setTipoNome("Concluídas");
        break;
      case "atrasadas":
        setTipoNome("Atrasadas");
        break;
      case "excluidas":
        setTipoNome("Excluídas");
        break;
      default:
        setTipoNome(null);
        break;
    }
  }, [tipo, dispatchTasks, listas, idLista, setLista]);

  const { tasks } = useTaskContext();

  return (
    <>
      <SecSidebar isOpen={sidebar} />
      <div className={style.tasksBody}>
        <div className={style.tasksHeader}>
          <div className={style.switchSidebarContainer}>
            {sidebar ? (
              <UilLeftArrowToLeft
                size="1rem"
                className={style.switchSidebar}
                onClick={() => setSidebar(false)}
              />
            ) : (
              <UilArrowToRight
                size="1rem"
                className={style.switchSidebar}
                onClick={() => setSidebar(true)}
              />
            )}
            <h1 className={style.listTitle}>
              {tipoNome ? tipoNome : lista ? lista.nome : "Tarefas"}
            </h1>
          </div>
          <div className={style.gridSettings}>
            <UilSlidersV size="1rem"/>
            <UilGrid size="1rem"/>
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
                valor={tarefaSelecionada}
                concluir={concluirTarefa}
              />
            ))}
        </div>
      </div>
      {tarefaSelecionada && (
        <ContainerTask
          task={tarefaSelecionada}
          setTask={setTarefaSelecionada}
          concluir={concluirTarefa}
        />
      )}
    </>
  );
};

export default PageTasks;
