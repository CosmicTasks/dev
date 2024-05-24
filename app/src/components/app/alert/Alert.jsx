import { UilExclamationTriangle, UilCheck } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import style from "./Alert.module.css";

const Alert = ({ tipo, conteudo }) => {
  const [icone, setIcone] = useState(null);
  const [classList, setClassList] = useState([style.alert]);

  useEffect(() => {
    switch (tipo) {
      case "erro":
        setIcone(<UilExclamationTriangle color="var(--c1)" />);
        setClassList([...classList, style.erro]);
        break;
      case "sucesso":
        setIcone(<UilCheck color="var(--c1)" />);
        setClassList([...classList, style.sucesso]);
        break;
      default:
        setClassList([...classList, style.erro]);
        setIcone(<UilExclamationTriangle color="var(--c1)" />);
    }
  }, [tipo]);

  return (
    <div className={classList.join(" ")}>
      {icone}
      <span className={style.title}>{conteudo}</span>
    </div>
  );
};

export default Alert;
