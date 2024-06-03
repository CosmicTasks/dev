import React, { useState } from 'react';
import Modal from './Modal';

const StudyModal = ({ flashcards, onClose }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
    setShowAnswer(false); // Reseta o estado para não mostrar a resposta no próximo flashcard
  };

  const handleShowAnswer = () => {
    setShowAnswer(true); // Define o estado para mostrar a resposta do flashcard atual
  };

  const handleClose = () => {
    setCurrentCardIndex(0); // Reseta o índice do flashcard ao fechar o modal
    onClose();
  };

  // Verifica se flashcards é undefined
  if (!flashcards || !flashcards.length) {
    return (
      <Modal isOpen={true} onRequestClose={handleClose}>
        <p>Não há flashcards para estudar.</p>
        <button onClick={handleClose}>Fechar</button>
      </Modal>
    );
  }

  return (
    <Modal isOpen={true} onRequestClose={handleClose}>
      {flashcards.map((flashcard, index) => (
        <div key={index} style={{ display: index === currentCardIndex ? 'block' : 'none' }}>
          <h2>Flashcard {index + 1}</h2>
          <p>Pergunta: {flashcard.question}</p>
          {showAnswer && <p>Resposta: {flashcard.answer}</p>}
          <button onClick={handleShowAnswer}>Mostrar Resposta</button>
        </div>
      ))}
      <button onClick={handleNextCard}>Próximo Flashcard</button>
    </Modal>
  );
};

export default StudyModal;