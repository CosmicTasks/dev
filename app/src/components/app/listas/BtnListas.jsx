import PropTypes from "prop-types";
import { UilSquareShape } from "@iconscout/react-unicons";

const BtnListas = ({lista, style}) => {
  return (
    <button type="button" className={style.item}>
      {lista.emoji ? (
        <em-emoji id={lista.emoji} size="12" style={{ width: "16px" }} />
      ) : (
        <UilSquareShape size="16" color={lista.cor} />
      )}
      <span className={style.listName}>{lista.nome}</span>
    </button>
  );
};

BtnListas.propTypes = {
  lista: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default BtnListas;
