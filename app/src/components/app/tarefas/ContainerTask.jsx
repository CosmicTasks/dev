import {
  UilInbox,
  UilCalender,
  UilHunting,
  UilTagAlt,
  UilCircle,
  UilPen,
  UilTrash,
  UilSquareShape,
} from "@iconscout/react-unicons";
import style from "./ContainerTask.module.css";
import dayjs from "dayjs";
import { useState } from "react";
import { useListaContext } from "../../../hooks/useListaContext";
import { useTaskContext } from "../../../hooks/useTaskContext";
import ModalExcluir from "../modal/ModalExcluir";

const ContainerTask = ({ task, setTask }) => {
  const [lista, setLista] = useState(task.nomeLista);
  const { dispatch: dispatchLista } = useListaContext();
  const { dispatch: dispatchTask } = useTaskContext();
  const newDate = dayjs(task.vencimento).format("YYYY-MM-DDTHH:mm:ss");
  const formattedDate = dayjs(newDate).format("DD/MM/YYYY");
  const [nomeTask, setNomeTask] = useState(task.nome);
  const [descTask, setDescTask] = useState(
    task.desc ? task.desc : "Sem descrição"
  );
  const [editar, setEditar] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);

  const fechar = () => {
    setTask(null);
  };

  const changeLista = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4000/api/listas/${task.lista}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: lista,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        dispatchLista({ type: "UPDATE_LISTA", payload: data });
      } else {
        console.log("Erro ao atualizar lista");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setEditar(true);
  };

  const handleCancelar = () => {
    setNomeTask(task.nome);
    setDescTask(task.desc ? task.desc : "Sem descrição");
    setEditar(false);
  };

  const handleSalvar = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/tasks/${task._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nomeTask,
            desc: descTask,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        dispatchTask({ type: "UPDATE_TASK", payload: data });
        setEditar(false);
      } else {
        console.log("Erro ao atualizar tarefa");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <ul className={style.header}>
        <li className={style.headerItem}>
          {task.corLista ? (
            <UilSquareShape size="18" color={task.corLista} />
          ) : (
            <em-emoji
              id={task.emojiLista}
              size="12"
              style={{ width: "16px" }}
            />
          )}
          <input
            className={style.nomeLista}
            type="text"
            value={lista}
            onChange={(e) => setLista(e.target.value)}
            onBlur={changeLista}
          />
        </li>
        <li className={style.headerItem}>
          <UilCalender size="18" color="var(--c11)" />
          <span>{formattedDate}</span>
        </li>
        <li className={style.headerItem}>
          <UilHunting size="18" color="var(--c11)" />
          <span>{task.prioridade}</span>
        </li>
      </ul>
      <div className={style.wrapper}>
        <div className={style.taskCheck}>
          <UilCircle size="18" color="var(--c11)" />
          <input
            type="text"
            readOnly={!editar}
            value={nomeTask}
            onChange={(e) => setNomeTask(e.target.value)}
          />
        </div>
        <div className={style.desc}>
          <input
            type="text"
            readOnly={!editar}
            value={descTask}
            onChange={(e) => setDescTask(e.target.value)}
          />
        </div>
        <ul className={style.options}>
          <li
            className={`${style.optionsItem} ${style.fechar}`}
            onClick={fechar}
          >
            <span>Fechar</span>
          </li>
          {editar ? (
            <>
              <li className={style.optionsItem} onClick={handleCancelar}>
                <span>Cancelar</span>
              </li>
              <li className={style.optionsItem} onClick={handleSalvar}>
                <span>Salvar</span>
              </li>
            </>
          ) : (
            <li className={style.optionsItem} onClick={handleEdit}>
              <UilPen size="18" color="var(--c11)" />
              <span>Editar</span>
            </li>
          )}
          <li className={style.optionsItem} onClick={() => setModalExcluir(true)}>
            <UilTrash size="18" color="var(--c11)" />
            <span>Excluir</span>
          </li>
        </ul>
      </div>
      {modalExcluir && (
        <ModalExcluir
          setModal={setModalExcluir}
          tipo="tarefa"
          id={task._id}
          setTask={setTask}
        />
      )}
    </div>
  );
};

export default ContainerTask;
