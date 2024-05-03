import { UilInbox, UilCalender, UilHunting, UilTagAlt, UilCircle, UilPen, UilTrash } from '@iconscout/react-unicons';
import style from './ContainerTask.module.css';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useListaContext } from '../../../hooks/useListaContext';

const ContainerTask = ({task, setTask}) => {
  const [lista, setLista] = useState(task.nomeLista);
  const { dispatch: dispatchLista } = useListaContext();

  const fechar = () => {
    setTask(null);
  }

  const changeLista = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/listas/${task.lista}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: lista,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        dispatchLista({ type: "UPDATE_LISTA", payload: data });
      } else {
        console.log("Erro ao atualizar lista");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const newDate = dayjs(task.vencimento).format('YYYY-MM-DDTHH:mm:ss');
  const formattedDate = dayjs(newDate).format('DD/MM/YYYY');

  return (
    <div className={style.container}>
      <ul className={style.header}>
        <li className={style.headerItem}>
          {task.corLista ? (
            <UilCircle size="18" color={task.cor} />
          ) : (
            <em-emoji id={task.emojiLista} size="12" style={{ width: "16px" }} />
          )}
          <input type="text" value={lista} onChange={(e) => setLista(e.target.value)} onBlur={changeLista} />
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
          <span>{task.nome}</span>
        </div>
        <div className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae eaque quas laborum fugit inventore error, neque dolores laudantium autem temporibus sed nisi minus cumque unde. Aliquid nobis autem placeat.
        </div>
        <ul className={style.options}>
          <li className={`${style.optionsItem} ${style.fechar}`} onClick={fechar}>
            <span>Fechar</span>
          </li>
          <li className={style.optionsItem}>
            <UilPen size="18" color="var(--c11)" />
            <span>Editar</span>
          </li>
          <li className={style.optionsItem}>
            <UilTrash size="18" color="var(--c11)" />
            <span>Excluir</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContainerTask;
