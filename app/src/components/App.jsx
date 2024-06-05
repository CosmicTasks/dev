import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./app/Sidebar";
import style from "./App.module.css";
import Modalconfig from "./app/modal/ModalConfig"; // Certifique-se de importar o Modalconfig corretamente
import { useListaContext } from "../hooks/useListaContext";
import { useUserContext } from "../hooks/useUserContext";
import { useTaskContext } from "../hooks/useTaskContext";

function App() {
  const { listas, dispatch: listaDispatch } = useListaContext();
  const { dispatch: taskDispatch } = useTaskContext();
  const { dispatch: userDispatch } = useUserContext();
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = JSON.parse(localStorage.getItem("user"));
    if (userJSON) {
      setLoggedIn(true);
      userDispatch({ type: "SET_USER", payload: userJSON });
    }
    
    const fetchListas = async () => {
      if (userJSON) {
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
      }
    };

    fetchListas();
  }, [listaDispatch, userDispatch]);

  const handleLogout = () => {
    console.log("Executing logout...");
    localStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/login"); // Redirecionar para a página de login
  };

  return (
    <div className="App">


    <div className={style.app}>
      <Sidebar />
      <Outlet />
      {showModal && (
        <Modalconfig 
          loggedIn={loggedIn} 
          onLogout={handleLogout} 
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
    
    </div>
  
  );
}

export default App;
