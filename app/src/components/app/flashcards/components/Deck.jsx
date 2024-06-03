import { useState } from "react";
import style from './Deck.module.css'
import { UilBox } from '@iconscout/react-unicons'
import { initialDecks } from "../initialData/initialDeck";





export default function Deck({
  deck,
  removeDeck,
  setAddQuestionsView,
  setSelectedDeck,
  userDecks,
  setUserDecks,
  quizMode,
  setQuizMode,
  setQuestionNumber,
  setCardSide,
}) {
  const [deckTitle, setDeckTitle] = useState(deck.data.name);
  const [changingName, setChangingName] = useState(false);


  const changeDeckName = () => {
    setChangingName(true);
  };

//muda o titulo do deck
  const titleChange = (event) => {
    setDeckTitle(event.target.value);
  };


  const titleSubmit = () => {
    setChangingName(false);
    const filteredDecks = userDecks.filter(
      (userDeck) => userDeck.id !== deck.id
    );
    const newDeckData = {
      id: deck.id,
      data: { name: deckTitle },
      content: deck.content,
    };
    const index = newDeckData.id;
    filteredDecks.splice(index, 0, newDeckData);
    setUserDecks(filteredDecks);
  };

  return (
    <div className={style.deck} key={`deck ${deck.id}`}>
      {changingName === false ? (
        <p onClick={changeDeckName} className={style.deckTitle}>
          {deckTitle}

        </p>
        
        
      ) : (
        <div className={style.editDeck}>
          <input
            className={style.editDeckName}
            type="text"
            value={deckTitle}
            onChange={titleChange}
          ></input>
          <button className={style.saveDeck} onClick={titleSubmit} type="submit">
            Save
          </button>
        </div>
      )}

<div className={style.wrapperNiveis}>
            <div className={style.nivel}>
              <span>2</span>
              <UilBox></UilBox>
          

              </div>

              <div className={style.nivel}>
              <span>0</span>
              <UilBox color="var(--c6)"></UilBox>
          
          

              </div>

              <div className={style.nivel}>
              <span>0</span>
              <UilBox color="var(--c6)"></UilBox>
          

              </div>


              <div className={style.nivel}>
              <span>0</span>
              <UilBox color="var(--c6)"></UilBox>
          

              </div>

              </div>

              <div className={style.secHeader}>
            <h2 className={style.cardSecTitle}>
              Cartões na caixa: <span className={style.qtdCards}></span>
            </h2> 
            
            <button className={style.addCard}
            
             onClick={() => {
               setCardSide("front");
               setSelectedDeck(deck);
               setAddQuestionsView(true);
             }}
            >Novo cartão</button>
          </div>

          <div className={style.wrapperEstudar}>
            <h1 className={style.qtdEstudar}>0/2</h1>
            <button className={style.btnEstudar}
             onClick={() => setQuizMode(!quizMode)}>Estudar cartões</button>
          </div>
             

            
             
      

      <div className="deck-buttons">
        <FaTrash
          className="remove-deck-button"
          onClick={() => {
            removeDeck(deck);
            setQuizMode(false);
          }}
        />
        <BsBoxArrowInRight
          className="view-deck-button"
          onClick={() => {
            setQuestionNumber(0);
            setCardSide("front");
            setSelectedDeck(deck);
            setQuizMode(true);
          }}
        />
      </div>
    </div>
  );
}
