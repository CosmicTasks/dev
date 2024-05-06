import PropTypes from "prop-types";
import { UilSquareShape, UilPen, UilTrash } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

const BtnListas = ({ lista, style }) => {
  return (
    <NavLink
      to={`/app/tasks/${encodeURIComponent(lista._id)}`}
      key={lista._id}
      className={({ isActive }) =>
        isActive ? `${style.active} ${style.item}` : `${style.item}`
      }
    >
      {lista.emoji ? (
        <em-emoji id={lista.emoji} size="12" style={{ width: "16px" }} />
      ) : (
        <UilSquareShape size="16" color={lista.cor} />
      )}
      <span className={style.listName}>{lista.nome}</span>
      <span className={style.badge}>
        <UilPen size="12" color="var(--c10)" />
        <UilTrash size="12" color="var(--c10)" />
      </span>
    </NavLink>
  );
};

BtnListas.propTypes = {
  lista: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default BtnListas;
