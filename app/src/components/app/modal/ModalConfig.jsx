import { useState } from "react";
import styles from "./ModalConfig.module.css";
import { CiUser } from "react-icons/ci";
import { IoMoon, IoClose, IoCheckmark } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import ModalChangeAvatar from "./ModalChangeAvatar";
import { useUserContext } from "../../../hooks/useUserContext";

function Modalconfig({ onClose, loggedIn, onLogout }) {
  const { user } = useUserContext();
  const [theme, setTheme] = useState("light");
  const [modalAvatar, setModalAvatar] = useState(false);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogoutClick = () => {
    console.log("Logout button clicked");
    onLogout();
  };

  return (
    <div className={styles.modal}>
      {modalAvatar && <ModalChangeAvatar setModalAvatar={setModalAvatar} />}
      <div className={styles.modalContent}>
        <div className={styles.top}>
          <button className={styles.close} onClick={onClose}>
            <IoClose size={25} color="#FFF" />
          </button>
          <h1>Personalize seu perfil</h1>
          <button className={styles.check}>
            <IoCheckmark size={25} color="#FFF" />
          </button>
        </div>
        <div className={styles.userInfo}>
          <button
            className={styles.userPic}
            onClick={() => setModalAvatar(true)}
          >
            {user.img ? (
              <img src={user.img} alt="User avatar" />
            ) : (
              <CiUser size={"2rem"} color="#8f3ae4" />
            )}
          </button>
          <p>{user.nome}</p>
        </div>

        <div className={styles.bottom}>
          <button
            className={
              theme === "light"
                ? styles.toggleThemeDark
                : styles.toggleThemeLight
            }
            onClick={handleThemeChange}
          >
            {theme === "light" ? (
              <IoIosSunny color="#FFF" size={"3rem"} />
            ) : (
              <IoMoon color="#FFF" size={"3rem"} />
            )}
          </button>

          {loggedIn ? (
            <>
              <button className={styles.logout} onClick={handleLogoutClick}>
                <MdLogout size={"2rem"} color="#FFF" />
              </button>
            </>
          ) : (
            <p>Faça login para acessar as configurações.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modalconfig;
