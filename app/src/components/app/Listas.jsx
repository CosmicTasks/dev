import { useState } from 'react'

export default function useListas() {
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
          data: "26/03",
          concluido: false,
        },
        {
          id: 2,
          nome: "Praticar francês",
          data: "26/03",
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
          data: "26/03",
          concluido: false,
        },
        {
          id: 2,
          nome: "Praticar inglês",
          data: "26/03",
          concluido: false,
        },
      ],
    },
  ]);

  const addLista = (nome, decoracao, modo) => {
    let novaLista = [];
    if (modo === "emoji") {
      novaLista = [
        ...listas,
        {
          id: listas.length + 1,
          nome: nome,
          emoji: decoracao,
          cor: null,
          tarefas: [],
        },
      ];
    } else {
      novaLista = [
        ...listas,
        {
          id: listas.length + 1,
          nome: nome,
          emoji: null,
          cor: decoracao,
          tarefas: [],
        },
      ];
    }
  
    setListas(novaLista);
  };

  return { listas, setListas, addLista };
}