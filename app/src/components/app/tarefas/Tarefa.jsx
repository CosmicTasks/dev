import { UilCircle } from '@iconscout/react-unicons'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Tarefa = ({style, task, tipo}) => {

  const dataHoje = () => {
    const hoje = new Date().toISOString().split("T")[0];
    const partes = hoje.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`
  }

  return (
    <div className={style.task} >
      <div className={style.taskCheck} >
        <UilCircle size="18" color="var(--c11)" />
        <span className={style.taskName}>{task.nome}</span>
      </div>
      <div className={style.taskOptions}>
        <span className={style.taskOptionsLista}>{task.nomeLista}</span>
        <span className={style.taskOptionsData}>
          {
            tipo === "hoje" ? "Hoje" : task.vencimento
          }
        </span>
      </div>
    </div>
  )
}

Tarefa.propTypes = {
  style: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
  tipo: PropTypes.string.isRequired
}

export default Tarefa