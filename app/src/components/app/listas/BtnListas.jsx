import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { UilSquareShape, UilPen, UilTrash } from "@iconscout/react-unicons";
import ModalExcluir from "../modal/ModalExcluir";
import { NavLink } from "react-router-dom";

const BtnListas = ({ lista, style }) => {
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);

  const handleOpenModalExcluir = () => {
    setModalExcluirAberto(true);
  };

  const handleCloseModalExcluir = () => {
    setModalExcluirAberto(false);
  };

  return (
    <>
      <NavLink
        to={`/app/tasks/${encodeURIComponent(lista._id)}`}
        key={lista._id}
        className={({ isActive }) =>
          isActive ? `${style.active} ${style.item}` : `${style.item}`
        }
      >
        {lista.emoji ? (
          <em-emoji id={lista.emoji} size="0.9rem" style={{ width: "1rem" }} />
        ) : (
          <UilSquareShape size="1rem" style={{ fill: lista.cor }} />
        )}
        <span className={style.listName}>{lista.nome}</span>
        <span className={style.badge}>
          <UilPen size="1rem" color="var(--c12)" />
          <UilTrash
            size="1rem"
            color="var(--c12)"
            onClick={handleOpenModalExcluir}
          />
        </span>
      </NavLink>

      {modalExcluirAberto && (
        <ModalExcluir
          setModal={setModalExcluirAberto}
          tipo="lista"
          id={lista._id}
        />
      )}
    </>
  );
};

BtnListas.propTypes = {
  lista: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default BtnListas;
