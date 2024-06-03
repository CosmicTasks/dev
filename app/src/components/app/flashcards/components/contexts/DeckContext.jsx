import React, { createContext, useState } from 'react';

const DeckContext = createContext();

const DeckProvider = ({ children }) => {
  const [decks, setDecks] = useState([
    { id: 1, name: 'Deck 1', flashcards: [] },
    // Adicione mais decks se necessário
  ]);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [flashcardToEdit, setFlashcardToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreatingDeck, setIsCreatingDeck] = useState(false);

  const openModal = (deck, flashcard = null) => {
    setSelectedDeck(deck);
    setFlashcardToEdit(flashcard);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDeck(null);
    setFlashcardToEdit(null);
    setIsCreatingDeck(false);
  };

  const saveFlashcard = (flashcard) => {
    const updatedDecks = decks.map(deck => {
      if (deck.id === selectedDeck.id) {
        const flashcards = flashcard.id
          ? deck.flashcards.map(fc => (fc.id === flashcard.id ? flashcard : fc))
          : [...deck.flashcards, { ...flashcard, id: Date.now() }];
        return { ...deck, flashcards };
      }
      return deck;
    });
    setDecks(updatedDecks);
    closeModal();
  };

  const saveDeck = (deck) => {
    const updatedDecks = deck.id
      ? decks.map(d => (d.id === deck.id ? deck : d))
      : [...decks, { ...deck, id: Date.now(), flashcards: [] }];
    setDecks(updatedDecks);
    closeModal();
  };

  const addDeck = (deckName) => {
    const newDeck = {
      id: Math.random().toString(36).substr(2, 9), // Gera um ID único para o deck
      name: deckName,
      flashcards: [] // Inicializa com uma lista vazia de flashcards
    };

    setDecks([...decks, newDeck]);
  };

  const selectDeck = (deckId) => {
    const selected = decks.find(deck => deck.id === deckId);
    setSelectedDeck(selected);
  };

  return (
    <DeckContext.Provider
      value={{
        decks,
        selectedDeck,
        flashcardToEdit,
        isModalOpen,
        isCreatingDeck,
        addDeck,
        selectDeck,
        openModal,
        closeModal,
        saveFlashcard,
        saveDeck,
        setIsCreatingDeck,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};

export { DeckProvider, DeckContext };