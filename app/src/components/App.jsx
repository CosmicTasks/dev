import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useListaContext } from "../hooks/useListaContext";
import { useUserContext } from "../hooks/useUserContext";
import { useTaskContext } from "../hooks/useTaskContext";

function App() {
  const { listas, dispatch: listaDispatch } = useListaContext();
  const { dispatch: taskDispatch } = useTaskContext();
  const { dispatch: userDispatch } = useUserContext();

  const navigate = useNavigate();

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
  }, [listaDispatch, userDispatch]);

  return (
    <div className="App">


    <div className={style.app}>
      <Sidebar />
      <Outlet />
    </div>
    
    </div>
  
  );
}

export default App;
