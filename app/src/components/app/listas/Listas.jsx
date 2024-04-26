import { useState, useEffect } from 'react'

export default function useListas() {
  const [listas, setListas] = useState(null);


  const addLista = async (nome, decoracao, modo) => {
    let novaLista = [];
    if (modo === "emoji") {
      fetch("http://localhost:4000/api/listas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          cor: null,
          emoji: decoracao,
          usuario: "662ab383d58317b3c6c7f81b"
        }),
      }).then((response) => response.json()).then((json) => {
        novaLista = [...listas, json];
      });
    } else {
      fetch("http://localhost:4000/api/listas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          cor: decoracao,
          emoji: null,
          usuario: "662ab383d58317b3c6c7f81b"
        }),
      }).then((response) => response.json()).then((json) => {
        novaLista = [...listas, json];
      });
    }
    setListas(novaLista);
  };

  return { listas, setListas, addLista };
}