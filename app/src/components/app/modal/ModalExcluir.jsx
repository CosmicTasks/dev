import { useEffect, useState } from "react";
import style from "./ModalExcluir.module.css";
import { useTaskContext } from "../../../hooks/useTaskContext";
import { useListaContext } from "../../../hooks/useListaContext";

const ModalExcluir = ({setModal, setTask, tipo, id}) => {

  const {dispatch: dispatchTask} = useTaskContext();
  const {dispatch: dispatchLista} = useListaContext();

  const excluir = async () => {
    if(tipo === "tarefa") {
      try {
        const response = await fetch(`http://localhost:4000/api/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Excluída",
          }),
        });
        const data = await response.json();
        if(response.ok) {
          dispatchTask({type: "REMOVE_TASK", payload: data._id});
          setModal(false);
          setTask(null);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch(`http://localhost:4000/api/listas/${id}`, {
          method: "DELETE",
        });
        if(response.ok) {
          dispatchLista({type: "REMOVE_LISTA", payload: id});
          setModal(false);
          setTask(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={style.modal}>
      <div className={style.wrapper}>
        <h2>Excluir {tipo}</h2>
        <p>Tem certeza que deseja excluir a {tipo}?</p>
        <div className={style.btns}>
          <button className={style.btn} onClick={() => setModal(false)}>
            Cancelar
          </button>
          <button className={`${style.btn} ${style.excluir}`} onClick={excluir}>Excluir</button>
        </div>
      </div>
    </div>
  )
}

export default ModalExcluir