import React, { useState } from "react";
import style from "./PageCard.module.css";
import { UilBox, UilEdit } from "@iconscout/react-unicons";
import logo from "../../assets/logo-cinza.png";
import Deck from "./flashcards/components/Deck";
import { DeckContext } from "./flashcards/components/contexts/DeckContext";
import { DeckProvider } from "./flashcards/components/contexts/DeckContext";

function PageCard() {
  const [selectedCard, setSelectedCard] = useState(1);

  return (
    <>
    <DeckProvider>
   

      <Deck></Deck>
     
    </DeckProvider>
   
    </>
  );
}

export default PageCard;
