const fetchTasks = async (user, listas, tipo, dispatch) => {
  const response = await fetch(
    `http://localhost:4000/api/tasks/${user._id}?list=${tipo}`,
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
    dispatch({ type: "SET_TASKS", payload: tasksNomeLista });
  } else {
    console.log("Erro ao buscar tarefas");
  }
};

export default fetchTasks;