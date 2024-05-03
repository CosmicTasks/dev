import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useListaContext } from "../hooks/useListaContext";
import { useUserContext } from "../hooks/useUserContext";
import { useTaskContext } from "../hooks/useTaskContext";

function App() {
  const { listas, dispatch: listaDispatch } = useListaContext();
  const { dispatch: taskDispatch } = useTaskContext();
  const { dispatch: userDispatch } = useUserContext();


  useEffect(() => {
    const userJSON = JSON.parse(localStorage.getItem("user"));
    const fetchUser = async () => {
      if (userJSON) {
        userDispatch({ type: "SET_USER", payload: userJSON });
      }
    };

    const fetchListas = async () => {
      const response = await fetch(
        `http://localhost:4000/api/listas/${userJSON._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        listaDispatch({ type: "SET_LISTAS", payload: data });
      } else {
        console.log("Erro ao buscar listas");
      }
    };

    fetchUser();
    fetchListas();
  }, []);

  const fetchTasks = async (listas) => {
    const userJSON = JSON.parse(localStorage.getItem("user"));
    const today = new Date().toISOString().split("T")[0];
    const response = await fetch(
      `http://localhost:4000/api/tasks/${userJSON._id}?list=hoje`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      const tasksNomeLista = data.map((task) => {
        const lista = listas.find(
          (lista) => lista._id === task.lista
        );
        return { ...task, nomeLista: lista.nome, corLista: lista.cor, emojiLista: lista.emoji};
      });
      taskDispatch({ type: "SET_TASKS", payload: tasksNomeLista });
    } else {
      console.log("Erro ao buscar tarefas");
    }
  };

  useEffect(() => {
    fetchTasks(listas);
  }, [listas]);

  return (
    <div className={style.app}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
