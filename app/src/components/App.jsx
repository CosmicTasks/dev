import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useListaContext } from "../hooks/useListaContext";
import { useUserContext } from "../hooks/useUserContext";

function App() {
  const { dispatch: listaDispatch } = useListaContext();
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

    const fetchTasks = async () => {
      const response = await fetch(
        `http://localhost:4000/api/tasks/user/${userJSON._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        listaDispatch({ type: "SET_TASKS", payload: data });
      } else {
        console.log("Erro ao buscar tarefas");
      }
    };

    fetchUser();
    fetchListas();
    fetchTasks();
  }, []);

  return (
    <div className={style.app}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
