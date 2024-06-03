import { useState } from "react";

import "./Card.css";
import { UilCheck } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

 function EditCard({
  currentCard,
  setEditCard,
  updateCard,
  cardNumber,
  frente,
  verso
}) {
  const [cardFront, setCardFront] = useState(currentCard.front);
  const [cardBack, setCardBack] = useState(currentCard.back);

  
  const swapCardSides = () => {
    const frontSide = cardFront;
    setCardFront(cardBack);
    setCardBack(frontSide);
  };


  
 

  return (

    <div className="small-card">
      <div className="small-card-front">

      <div className="edit-card-buttons">
        <button
         className="btnFechar"
         onClick={() =>
         setEditCard(false)}>
         <UilTimes color="#F2E5FF"></UilTimes>
         </button>
             
             <p className="newCard">Editar Cartão</p>
        <button 
         className="btnSalvar"
          onClick={() => {
            setEditCard(false);
            updateCard(cardNumber, cardFront, cardBack);
          }}
        >
           <UilCheck color="#F2E5FF" className='icon'></UilCheck>
          
        </button>
      </div>
      

       
        <p className="edit-card-side-choice">Frente</p>
        <input
          className="edit-card-input"
          type="text"
         
         
          onChange={(e) => setCardFront(e.target.value)}
        ></input>
      </div>

       

      <div className="small-card-back">
        <p className="edit-card-side-choice">Verso</p>
        <input
          className="edit-card-input"
          type="text"
         
          onChange={(e) => setCardBack(e.target.value)}
        ></input>
      </div>
      
    </div>
  );
}

export default EditCard
