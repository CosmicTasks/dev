import React from "react";
import style from "./ModalNewList.module.css";
import { UilSquareShape, UilSmile } from "@iconscout/react-unicons";
import EmojiPicker from "emoji-picker-react";

const ModalNewList = () => {
  const [tabEmoji, setTabEmoji] = React.useState(false);

  const colors = [
    [
      "var(--azul-royal)",
      "var(--azul-lavanda)",
      "var(--azul-piscina)",
      "var(--azul-cerceta)",
      "var(--verde-floresta)",
      "var(--verde-neon)",
      "var(--mostarda)",
      "var(--abobora)",
    ],
    [
      "var(--coral)",
      "var(--vermelho)",
      "var(--rosa-neon)",
      "var(--rosa)",
      "var(--roxo-lavanda)",
      "var(--roxo-royal)",
      "var(--cinza)",
      "var(--preto)",
    ],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const handleButton = (e, valor) => {
    e.preventDefault();
    valor ? setTabEmoji(true) : setTabEmoji(false);
  };

  return (
    <div className={style.modal}>
      <div className={style.wrapper}>
        <form className={style.newList} onSubmit={handleSubmit}>
          <UilSquareShape size="16" color="var(--c9)" />
          <input
            type="text"
            placeholder="escreva o nome da lista"
            className={style.inputName}
            maxLength={20}
          />
        </form>
        <div className={style.btns}>
          <button className={style.btn} onClick={() => setTabEmoji(true)}>
            <UilSmile size="14" color="var(--c12)" /> Emoji
          </button>
          <button
            className={`${style.btn} ${style.active}`}
            onClick={() => setTabEmoji(false)}
          >
            <UilSquareShape size="14" color="var(--r1)" /> Cor
          </button>
        </div>
        <div className={style.container}>
          <EmojiPicker categories={[]} width={250} open={tabEmoji} searchPlaceHolder={`Pesquisar`} skinTonesDisabled={true} previewConfig={{showPreview: false}} />
          {tabEmoji === false &&
            colors.map((item, index) => (
              <div key={index} className={style.items}>
                {item.map((color, index) => (
                  <UilSquareShape key={index} size="18" color={color} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ModalNewList;
