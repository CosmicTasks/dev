import React, { useState } from "react";
import styles from "./ModalConfig.module.css";

function Modalconfig({ onClose, loggedIn, onLogout, onChangeAvatar }) {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.modal}>
      <div className={`modal-content ${theme}`}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Configurações</h2>
        <button className="secondary" onClick={handleThemeChange}>
          Mudar Tema
        </button>
        {loggedIn ? (
          <>
            <button className="secondary" onClick={onLogout}>Deslogar</button>
            <button className="secondary" onClick={onChangeAvatar}>Mudar Avatar</button>
          </>
        ) : (
          <p>Faça login para acessar as configurações.</p>
        )}
      </div>
    </div>
  );
}

export default Modalconfig;
