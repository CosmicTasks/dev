import React, { useState } from "react";
import data from '@emoji-mart/data'
import { init } from 'emoji-mart'
import { UilSquareShape } from "@iconscout/react-unicons";
init({ data })

const Listas = ({style}) => {
  const [listas, setListas] = useState([
    {
      id: 1,
      nome: "Francês",
      emoji: "croissant",
      cor: null,
      tarefas: [
        {
          id: 1,
          nome: "Estudar francês",
          concluido: false,
        },
        {
          id: 2,
          nome: "Praticar francês",
          concluido: false,
        },
      ],
    },
    {
      id: 2,
      nome: "Inglês",
      emoji: null,
      cor: "var(--azul-royal)",
      tarefas: [
        {
          id: 1,
          nome: "Estudar inglês",
          concluido: false,
        },
        {
          id: 2,
          nome: "Praticar inglês",
          concluido: false,
        },
      ],
    },
  ]);

  return (
    <>
      {listas.map((lista, id) => (
        <button key={id} type="button" className={style.item}>
          {lista.emoji ? (
            <em-emoji id={lista.emoji} size="14" />) : (
            <UilSquareShape size="14" color={lista.cor} />
          )}
            <span>{lista.nome}</span>
        </button>
        // <div key={id}>
        //   <h2>{lista.nome}</h2>
        //   <ul>
        //     {lista.tarefas.map((tarefa, id) => (
        //       <li key={id}>{tarefa.nome}</li>
        //     ))}
        //   </ul>
        // </div>
      ))}
    </>
  );
};

export default Listas;
