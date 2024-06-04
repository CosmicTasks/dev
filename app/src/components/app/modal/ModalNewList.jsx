import { useState, useEffect } from "react";
import style from "./ModalNewList.module.css";
import { UilSquareShape } from "@iconscout/react-unicons";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useListaContext } from "../../../hooks/useListaContext";
import { useUserContext } from "../../../hooks/useUserContext";

const ModalNewList = ({setShowModalNewList}) => {
  const { listas, dispatch } = useListaContext();
  const { user } = useUserContext();
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

  const addLista = async (nome, decoracao, modo) => {
    if (modo === "emoji") {
      const response = await fetch("http://localhost:4000/api/listas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          cor: null,
          emoji: decoracao,
          usuario: user._id
        }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "CREATE_LISTA", payload: data });
      }
    } else {
      const response = await fetch("http://localhost:4000/api/listas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          cor: decoracao,
          emoji: null,
          usuario: user._id
        }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "CREATE_LISTA", payload: data });
      }
    }
  }

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
    setShowModalNewList(false);
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
              <em-emoji id={emoji} size="1em" />
            </>
          ) : (
            <UilSquareShape size="1em" color={cor} />
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
              emojiSize={24}
              emojiButtonSize={32}
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
                    size="1em"
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
