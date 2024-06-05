import React from 'react';
import Modal from 'react-modal';
import style from './StudyModal.module.css'
import {UilTimes} from '@iconscout/react-unicons'
import {UilCheck} from '@iconscout/react-unicons'
import { UilStepForward } from '@iconscout/react-unicons'
import { UilStepBackwardAlt } from '@iconscout/react-unicons'
import { UilSkipForwardAlt } from '@iconscout/react-unicons'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px', // Largura do modal
    height: 'fitcontent', // Altura do modal
    padding: '20px', // Padding interno
    backgroundColor: '#f0f0f0', // Cor de fundo do modal
    borderRadius: '10px', // 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 
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
       

       <button className={style.Fechar} onClick={onClose}>
       <UilTimes color="#fff"></UilTimes>
       </button>
         
       <button className={style.Salvar} onClick={onClose}>
       <UilCheck color="#fff" className='icon'></UilCheck>
       </button>
          
        </div>

        <div className={style.flashcardContent}>
            <h2 className={style.pergunta}>{currentCard.question}</h2>
            {showAnswer && <p className={style.resposta}>{currentCard.answer}</p>}
          </div>
        </div>
       
        <div className={style.controls}>

       < UilStepBackwardAlt className={style.skip} onClick={handleNextCard} size='30px' color='var(--r7)'></UilStepBackwardAlt>
          <button className={style.mostrarRespostaBtn} onClick={handleShowAnswer}>
            Mostrar Resposta
          </button>

          <UilSkipForwardAlt className={style.skip} onClick={handleNextCard} size='30px' color='var(--r7)'></UilSkipForwardAlt>
         
        </div>

    </Modal>
  );
};

export default StudyFlashcardsModal;