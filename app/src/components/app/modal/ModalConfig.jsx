import React, { useState } from "react";
import styles from "./ModalConfig.module.css";
import { CiUser } from "react-icons/ci";
import { IoMoon, IoClose, IoCheckmark } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import ModalChangeAvatar from "./ModalChangeAvatar";

function Modalconfig({ onClose, loggedIn, onLogout, onChangeAvatar }) {
  const [theme, setTheme] = useState("light");
  const [modalAvatar, setModalAvatar] = useState(false);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.modal}>
      {modalAvatar && <ModalChangeAvatar setModalAvatar={setModalAvatar}/>}
      <div className={`${theme} ${styles.modalContent}`}>
        <button className={styles.check}>
          <IoCheckmark size={25} color="#FFF" />
        </button>
        <h2>Personalize seu Perfil</h2>
        <button className={styles.userPic} onClick={ () => setModalAvatar(true)}>
          <CiUser color="#8f3ae4" size={60}/>
        </button>

        <button className={theme === "light" ? styles.toggleThemeDark : styles.toggleThemeLight
        }
        onClick={handleThemeChange}>
          {theme === "light" ? (
            <IoMoon color="#FFF" size={50} />
          ) : (
            <IoIosSunny color="#FFF" size={50} />
          )}
        </button>
        {loggedIn ? (
          <>
            <button className={styles.logout} onClick={onLogout}>
              <MdLogout size={35} color="#FFF" />
            </button>
          </>
        ) : (
          <p>Faça login para acessar as configurações.</p>
        )}
      </div>
    </div>
  );
}

export default Modalconfig;
