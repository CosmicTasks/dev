import { useState } from "react";
import styles from "./modalChangeAvatar.module.css";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { useUserContext } from "../../../hooks/useUserContext";

function ModalChangeAvatar({ setModalAvatar }) {
  
  const { user } = useUserContext();
  const [avatar, setAvatar] = useState(user.img);

  const handleAvatarChange = (avatar) => {
    setAvatar(avatar);
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
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
