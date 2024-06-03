import React from 'react';
import Modal from 'react-modal';
import style from './StudyModal.module.css'
import {UilTimes} from '@iconscout/react-unicons'
import {UilCheck} from '@iconscout/react-unicons'

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

const StudyFlashcardsModal = ({
  flashcards,
  onClose,
  currentCardIndex,
  showAnswer,
  handleNextCard,
  handleShowAnswer,
  closeStudyModal
}) => {
  const currentCard = flashcards[currentCardIndex];

  return (
    <Modal isOpen={true} onRequestClose={onClose} style={customStyles} >

<div className={style.smallCard}>
        <div className={style.editCardButtons}>
       

       <button className={style.Fechar} onClick={closeStudyModal}>
       <UilTimes color="#fff"></UilTimes>
       </button>
         
         
      

       <button className={style.Salvar}>
       <UilCheck color="#fff" className='icon'></UilCheck>
       </button>
          
          
      
             


        </div>

        <div className={style.flashcardContent}>
            <h2 className={style.question}>{currentCard.question}</h2>
            {showAnswer && <p className={style.answer}>{currentCard.answer}</p>}
          </div>
        </div>
        <div className={style.controls}>
          <button className={style.showAnswerBtn} onClick={handleShowAnswer}>
            Mostrar Resposta
          </button>
          <button className={style.nextCardBtn} onClick={handleNextCard}>
            Próximo Cartão
          </button>
        </div>

      
     
    </Modal>
  );
};

export default StudyFlashcardsModal;