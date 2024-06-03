import React, { useContext, useState, useEffect } from 'react';
import { DeckContext } from './contexts/DeckContext';
import FlashcardForm from './FlashCardForm';
import Modal from 'react-modal';
import style from './Deck.module.css';
import { UilBox, UilEdit, UilPlus } from '@iconscout/react-unicons';
import StudyFlashcardsModal from './StudyModal';
import DeckForm from './DeckForm'

// Definindo estilos customizados para o modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px', // Largura do modal
    height: '300px', // Altura do modal
    padding: '20px', // Padding interno
    backgroundColor: '#f0f0f0', // Cor de fundo do modal
    borderRadius: '10px', // Bordas arredondadas
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
};

const Deck = () => {
  const {
    decks,
    selectedDeck,
    flashcardToEdit,
    isModalOpen,
    isCreatingDeck,
    openModal,
    closeModal,
    saveFlashcard,
    saveDeck,
    selectDeck,
    setIsCreatingDeck,
    totalcards,
    deck,
    flashcards,
  } = useContext(DeckContext);

  const [isStudyModalOpen, setIsStudyModalOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleStudyClick = () => {
    setIsStudyModalOpen(true);
  };

  const closeStudyModal = () => {
    setIsStudyModalOpen(false);
    setCurrentCardIndex(0);
    setShowAnswer(false);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % selectedDeck.flashcards.length);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className={style.caixasBody}>
      <div className={style.caixa}>
        <h1 className={style.tituloCaixa}>Vocabulário Francês</h1>
        <span className={style.descCaixa}>2 cartões, 2 para hoje</span>
        <ul className={style.listaCaixas}>
          <li>
            <UilBox size="16" color="var(--r7)" />
          </li>
          <li>
            <UilBox size="16" color="var(--c6)" />
          </li>
          <li>
            <UilBox size="16" color="var(--c6)" />
          </li>
          <li>
            <UilBox size="16" color="var(--c6)" />
          </li>
          <li>
            <UilBox size="16" color="var(--c6)" />
          </li>
        </ul>
      </div>

      {decks.map((deck) => (
        <div className={style.deck} key={deck.id}>
          <div className={style.caixa}>
            <h2 className={style.tituloCaixa} onClick={() => selectDeck(deck.id)}>
              {deck.name}
            </h2>
            <span className={style.descCaixa}> cartões, 2 para hoje</span>
            <ul className={style.listaCaixas}>
              <li>
                <UilBox size="16" color="var(--r7)" />
              </li>
              <li>
                <UilBox size="16" color="var(--c6)" />
              </li>
              <li>
                <UilBox size="16" color="var(--c6)" />
              </li>
              <li>
                <UilBox size="16" color="var(--c6)" />
              </li>
              <li>
                <UilBox size="16" color="var(--c6)" />
              </li>
            </ul>
          </div>
          {deck.flashcards.map((flashcard) => (
            <div key={flashcard.id}>
              {flashcard.deckId === deck.id && <p>{flashcard.question}</p>}
            </div>
          ))}
        </div>
      ))}

      <div className={style.container}>
        <div className={style.deckList}>
          <div className={style.newDeck}>
            <UilPlus
              onClick={() => {
                setIsCreatingDeck(true);
                openModal(null);
              }}
            ></UilPlus>
          </div>
        </div>
      </div>

      {selectedDeck && (
        <div className={style.cardInfo}>
          <div className={style.cardHeader}>
            <h2>{selectedDeck.name}</h2>
          </div>
          <div className={style.wrapperNiveis}>
            <div className={style.nivel}>
              <span>2</span>
              <UilBox size="18" color="var(--r7)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
            <div className={style.nivel}>
              <span>0</span>
              <UilBox size="18" color="var(--c6)" />
            </div>
          </div>
          <div className={style.secHeader}>
            <h2 className={style.cardSecTitle}>Total de cartões: {selectedDeck.flashcards.length}</h2>
            <button className={style.addCard} onClick={() => openModal(selectedDeck)}>
              Novo cartão
            </button>
          </div>
          <div className={style.wrapperEstudar}>
            <h1 className={style.qtdEstudar}>0/2</h1>
            <button className={style.btnEstudar} onClick={handleStudyClick}>
              Estudar cartões
            </button>
          </div>
          <div className={style.wrapperTabs}>
            <div className={style.nav}>
              <button className={`${style.tab} ${style.active}`}>Hoje</button>
              <button className={style.tab}>Atuais</button>
              <button className={style.tab}>Concluídas</button>
            </div>
            <div className={style.tarefas}>
              {decks.map((deck) => (
                <div className={style.deck} key={deck.id}>
                  <h2 onClick={() => selectDeck(deck.id)}></h2>
                  {deck.flashcards.map((flashcard) => (
                    <div key={flashcard.id}>
                      {flashcard.deckId === deck.id && (
                        <div className={style.tarefa}>
                          <p className={style.tarefaTitle}>{flashcard.question}</p>
                          <UilEdit size="14" color="var(--r12)" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {isStudyModalOpen && selectedDeck && (
            <StudyFlashcardsModal
              flashcards={selectedDeck.flashcards}
              onClose={closeStudyModal}
              currentCardIndex={currentCardIndex}
              showAnswer={showAnswer}
              handleNextCard={handleNextCard}
              handleShowAnswer={handleShowAnswer}
            />
          )}
        </div>
      )}

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
        {isCreatingDeck ? (
          <DeckForm
            onSave={(deck) => {
              saveDeck(deck);
              closeModal();
            }}
          />
        ) : (
          <FlashcardForm flashcard={flashcardToEdit} onSave={saveFlashcard} />
        )}
      </Modal>
    </div>
  );
};

export default Deck;