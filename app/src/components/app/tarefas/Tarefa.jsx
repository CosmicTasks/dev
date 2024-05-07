import { UilCircle } from "@iconscout/react-unicons";
import PropTypes from "prop-types";
import { useEffect } from "react";
import dayjs from "dayjs";

const Tarefa = ({ style, task, setTask, valor, concluir }) => {
  const newDate = dayjs(task.vencimento).format("YYYY-MM-DDTHH:mm:ss");
  const formattedDate = dayjs(newDate).format("DD/MM/YYYY");

  const clickTask = (e) => {
    if (valor !== task) {
      setTask(task);
    }

    if (e.target.tagName === "svg") {
      concluir(task._id);
    }
  }

  return (
    <div className={style.task} onClick={clickTask}>
      <div className={style.taskCheck}>
        <UilCircle size="18" color="var(--c11)" />
        <span className={style.taskName}>{task.nome}</span>
      </div>
      <div className={style.taskOptions}>
        <span className={style.taskOptionsLista}>{task.nomeLista}</span>
        {task.vencimento && (
          <span className={style.taskOptionsData}>{formattedDate}</span>
        )}
      </div>
    </div>
  );
};

Tarefa.propTypes = {
  style: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
  setTask: PropTypes.func,
};

export default Tarefa;
