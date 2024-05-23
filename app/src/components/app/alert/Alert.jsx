import { UilExclamationTriangle } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import style from "./Alert.module.css";

const Alert = ({ icon, conteudo, setErro }) => {
  const [icone, setIcone] = useState(null);

  const click = () => {
    setErro ? setTimeout(() => setErro(null), 1000) : ''
  };

  useEffect(() => {
    switch (icon) {
      case "erro":
        setIcone(<UilExclamationTriangle color="var(--c1)" />);
        break;
      default:
        setIcone(<UilExclamationTriangle color="var(--c1)" />);
    }
  }, [icon]);

  return (
    <div className={style.alert} onClick={click}>
      {icone}
      <span className={style.title}>{conteudo}</span>
    </div>
  );
};

export default Alert;
