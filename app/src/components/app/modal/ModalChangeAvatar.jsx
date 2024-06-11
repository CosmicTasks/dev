import React, { useState } from "react";
import styles from "./ModalChangeAvatar.module.css";
import { CiUser } from "react-icons/ci";
import { IoMoon, IoClose, IoCheckmark } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { MdLogout } from "react-icons/md";

function ModalChangeAvatar({ onClose, onChangeAvatar, setModalAvatar }) {
  const [theme, setTheme] = useState("light");

  return (
    <div className={styles.modal}>
      <div className={`${theme} ${styles.modalContent}`}>
        <button className={styles.close} onClick={() => setModalAvatar(false)}>
          <IoClose size={25} color="#FFF" />
        </button>
        <button className={styles.check}>
          <IoCheckmark size={25} color="#FFF" />
        </button>
        <h1>Escolha seu avatar cosmico</h1>
        <div className={styles.avatars}>
          <button className={styles.avatarIcon}>
            <img src="./foto1.svg"></img>
          </button>
          <button className={styles.avatarIcon}>
            <img src="./foto2.svg"></img>
          </button>
          <button className={styles.avatarIcon}>
            <img src="./foto3.svg"></img>
          </button>
          <button className={styles.avatarIcon}>
            <img src="./foto4.svg"></img>
          </button>
          <button className={styles.avatarIcon}>
            <img src="./foto5.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalChangeAvatar;
