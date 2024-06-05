import { useState } from "react";
import { useListaContext } from "../../../hooks/useListaContext";
import style from "./ModalNewTask.module.css";
import {
  UilSquareShape,
  UilCircle,
  UilCalender,
  UilClockNine,
} from "@iconscout/react-unicons";
import Select from "react-select";
import { DateTimeField } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useUserContext } from "../../../hooks/useUserContext";
import { useTaskContext } from "../../../hooks/useTaskContext";

const ModalNewTask = ({ setShowModalNewTask }) => {
  const { listas } = useListaContext();
  const { user } = useUserContext();
  const { dispatch } = useTaskContext();
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [hasData, setHasData] = useState(false);
  const [vencimento, setVencimento] = useState(null);

  const options = listas.map((lista) => {
    return {
      value: lista._id,
      label: lista.emoji ? (
        <>
          <em-emoji id={lista.emoji} size="0.9rem" style={{ width: "1rem" }} />
          {` ${lista.nome}`}
        </>
      ) : (
        <>
          <UilSquareShape size="1rem" color={lista.cor} />
          {` ${lista.nome}`}
        </>
      ),
    };
  });

  const [listaSelecionada, setListaSelecionada] = useState(options[0]);

  const handleClickData = (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle(style.active);
    setHasData(!hasData);
  };

  const addTask = async (nome, lista, vencimento) => {
    try {
      const response = await fetch("http://localhost:4000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          lista: lista,
          vencimento: vencimento,
          usuario: user._id,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "CREATE_TASK", payload: data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nomeTarefa === "") return;
    const formatado = vencimento ? vencimento.toISOString() : null;
    const lista = listaSelecionada.value;
    addTask(nomeTarefa, lista, formatado);
    setNomeTarefa("");
    setListaSelecionada(options[0]);
    setVencimento(null);
    setShowModalNewTask(false);
  };

  return (
    <div className={style.modal}>
      <div className={style.wrapper}>
        <form className={style.newTask} onSubmit={handleSubmit}>
          <UilCircle size="1rem" />
          <input
            type="text"
            placeholder="Nome da tarefa"
            className={style.inputName}
            maxLength={50}
            onChange={(e) => {
              setNomeTarefa(e.target.value);
            }}
            value={nomeTarefa}
          />
        </form>
        <div className={style.select}>
          <Select
            className={style.selectLista}
            isClearable={false}
            isSearchable={false}
            placeholder="Selecione a lista"
            options={options}
            value={listaSelecionada}
            onChange={(e) => {
              setListaSelecionada(e);
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: "var(--c1)",
                color: "var(--c12)",
                border: "var(--c12) 1px solid",
                boxShadow: "none",
                borderRadius: "0.5rem",
                height: "100%",
                fontSize: "1rem",
                cursor: "pointer",
              }),
              menu: (styles) => ({
                ...styles,
                backgroundColor: "var(--c1)",
                color: "var(--c12)",
                border: "var(--c12) 1px solid",
                boxShadow: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
              }),
              option: (styles, { isFocused }) => ({
                ...styles,
                backgroundColor: isFocused ? "var(--c1)" : "var(--c1)",
                color: "var(--c12)",
                fontSize: "1rem",
                cursor: "pointer",
              }),
              singleValue: (styles) => ({
                ...styles,
                color: "var(--c12)",
                fontSize: "1rem",
                alignItems: "center",
                display: "flex",
                gap: "0.5rem",
              }),
              dropdownIndicator: (styles) => ({
                ...styles,
                color: "var(--c12)",
              }),
            }}
          />
          <div className={style.btns}>
            <button
              className={style.btnCalender}
              name="data"
              onClick={handleClickData}
            >
              <UilCalender size="1rem" color="var(--c12)" />
            </button>
          </div>
        </div>
        {hasData && (
          <div className={style.container}>
            <DateTimeField
              format="L HH:mm"
              value={vencimento}
              className={style.date}
              onChange={(date) => {
                setVencimento(date);
                console.log(date);
              }}

            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalNewTask;
