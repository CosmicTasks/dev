import React, { useState } from "react";
import style from "./ModalNewList.module.css";
import { UilSquareShape } from "@iconscout/react-unicons";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const ModalNewList = ({addLista}) => {
  const [tabEmoji, setTabEmoji] = useState(false);
  const [emoji, setEmoji] = useState("smiley");
  const [cor, setCor] = useState("var(--azul-royal)");
  const [nomeLista, setNomeLista] = useState("");
  const [decoracao, setDecoracao] = useState("");
  const [modo, setModo] = useState("cor");

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
    if (nomeLista === "") return;

    const currentModo = tabEmoji ? "emoji" : "cor";
    const currentDecoracao = currentModo === 'cor' ? cor : emoji;

    addLista(nomeLista, currentDecoracao, currentModo);
    setNomeLista("");
    setCor("var(--azul-royal)");
    setEmoji("smiley");
    setModo(currentModo);
    setDecoracao(currentDecoracao);
  };

  const handleEmojiClick = (e) => {
    setEmoji(e.id);
  };

  const handleCorClick = (e) => {
    setCor(e.currentTarget.getAttribute("fill"));
  };

  const handleClick = (e, value) => {
    e.preventDefault();
    setTabEmoji(value);
    setModo(value ? "emoji" : "cor");
    setDecoracao(value ? emoji : cor);
    const btns = e.currentTarget.parentElement.children;
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove(style.active);
    }
    e.currentTarget.classList.add(style.active);
  };

  return (
    <div className={style.modal}>
      <div className={style.wrapper}>
        <form className={style.newList} onSubmit={handleSubmit}>
          {tabEmoji === true ? (
            <>
              <em-emoji id={emoji} size="16" />
            </>
          ) : (
            <UilSquareShape size="16" color={cor} />
          )}
          <input
            type="text"
            placeholder="escreva o nome da lista"
            className={style.inputName}
            maxLength={20}
            onChange={(e) => {
              setNomeLista(e.target.value);
            }}
            value={nomeLista}
          />
        </form>
        <div className={style.btns}>
          <button
            className={style.btn}
            onClick={(e) => {
              handleClick(e, true);
            }}
          >
            Emoji
          </button>
          <button
            className={`${style.btn} ${style.active}`}
            onClick={(e) => {
              handleClick(e, false);
            }}
          >
            Cor
          </button>
        </div>
        <div className={style.container}>
          {tabEmoji === true ? (
            <Picker
              data={data}
              onEmojiSelect={handleEmojiClick}
              emojiSize={18}
              emojiButtonSize={28}
              icons="outline"
              maxFrequentRows={0}
              theme="light"
              skinTonePosition="search"
              previewPosition="none"
              noCountryFlags={true}
            />
          ) : (
            colors.map((item, index) => (
              <div key={index} className={style.items}>
                {item.map((color, index) => (
                  <UilSquareShape
                    onClick={handleCorClick}
                    key={index}
                    size="18"
                    color={color}
                  />
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalNewList;