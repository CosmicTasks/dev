import { useState } from "react";

import EditCard from "./EditCard";
import "./Card.css";

export default function Card({
  currentCard,
  cardNumber,
  deleteCard,
  updateCard,
  setCardSide,
}) {
  const [editCard, setEditCard] = useState(false);

  //modo de edição do card
  const editToggle = () => {
    setEditCard(!editCard);
  };

  return (
    <div className="card-section">
      {editCard === false ? (
        <div className="small-card">
          <div className="small-card-buttons">
            <GrEdit className="edit-button" onClick={editToggle} />

         
          </div>
          <p>{currentCard.front}</p>

          <button
           className="deleteButton"
           onClick={() => {
             setCardSide("frente");
             deleteCard(currentCard);
           }}
           
       
           
           >Deletar cartão</button>
        
        </div>
      ) : (
        <EditCard
          currentCard={currentCard}
          setEditCard={setEditCard}
          updateCard={updateCard}
          cardNumber={cardNumber}

          
        />

        
      )}

      
    </div>
  );
}
