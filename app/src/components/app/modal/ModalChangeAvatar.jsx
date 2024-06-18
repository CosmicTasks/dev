import { useState } from "react";
import styles from "./ModalChangeAvatar.module.css";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { useUserContext } from "../../../hooks/useUserContext";

function ModalChangeAvatar({ setModalAvatar }) {
  const { user, dispatch } = useUserContext();
  const [avatar, setAvatar] = useState(user.img);

  const handleAvatarChange = (avatar) => {
    setAvatar(avatar);
  };

  const handleSaveAvatar = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ img: avatar }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_USER", payload: data });
        localStorage.setItem("user", JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
    setModalAvatar(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.top}>
          <button
            className={styles.close}
            onClick={() => setModalAvatar(false)}
          >
            <IoClose size={25} color="#FFF" />
          </button>
          <h1>Escolha seu avatar cosmico</h1>
          <button className={styles.check} onClick={handleSaveAvatar}>
            <IoCheckmark size={25} color="#FFF" />
          </button>
        </div>
        <div className={styles.avatars}>
          <button
            className={
              user.pic === "/foto1.svg"
                ? `${styles.avatarIcon} ${styles.active}`
                : styles.avatarIcon
            }
            onClick={() => handleAvatarChange("/foto1.svg")}
          >
            <img src="/foto1.svg"></img>
          </button>
          <button
            className={
              user.pic === "/foto2.svg"
                ? `${styles.avatarIcon} ${styles.active}`
                : styles.avatarIcon
            }
            onClick={() => handleAvatarChange("/foto2.svg")}
          >
            <img src="./foto2.svg"></img>
          </button>
          <button
            className={
              user.pic === "/foto3.svg"
                ? `${styles.avatarIcon} ${styles.active}`
                : styles.avatarIcon
            }
            onClick={() => handleAvatarChange("/foto3.svg")}
          >
            <img src="./foto3.svg"></img>
          </button>
          <button
            className={
              user.pic === "/foto4.svg"
                ? `${styles.avatarIcon} ${styles.active}`
                : styles.avatarIcon
            }
            onClick={() => handleAvatarChange("/foto4.svg")}
          >
            <img src="./foto4.svg"></img>
          </button>
          <button
            className={
              user.pic === "/foto5.svg"
                ? `${styles.avatarIcon} ${styles.active}`
                : styles.avatarIcon
            }
            onClick={() => handleAvatarChange("/foto5.svg")}
          >
            <img src="./foto5.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalChangeAvatar;
