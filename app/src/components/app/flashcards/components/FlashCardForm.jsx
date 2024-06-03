import React, { useState } from 'react';
import style from './FlashCardForm.module.css'
import { UilTimes } from '@iconscout/react-unicons'
import { UilCheck } from '@iconscout/react-unicons'

const FlashcardForm = ({ flashcard, onSave }) => {
  const [question, setQuestion] = useState(flashcard?.question || '');
  const [answer, setAnswer] = useState(flashcard?.answer || '');

  const handleSubmit = (e) => {
    if(question.trim() !== '' && answer.trim() !== ''){
      e.preventDefault();
      onSave({ ...flashcard, question, answer });
    }
    else{
      alert("Preencha o formulário")
    }
    
  };

  const handleSave = () => {
    if (question && answer) {
      onSave({ ...flashcard, question, answer });
    }
  };

  return (
    <form className={style.modal}onSubmit={handleSubmit}>
  
      <div className={style.smallCard}>
        <div className={style.editCardButtons}>
        <button
         className={style.Fechar}>
         
         <UilTimes color="#F2E5FF"></UilTimes>
         </button>

      

         <button onClick={handleSave} 
         className={style.Salvar}
         
        >
           <UilCheck color="#F2E5FF" className='icon'></UilCheck>
          
        </button>
             

        </div>

       
       
      </div>
      <p className={style.deckTitle}>Novo cartão</p>
      <div>

      <p className={style.editCardSideChoice}>Frente</p>
        <input
          className={style.editCardInput}
          type="text"
         value={question} onChange={(e) => setQuestion(e.target.value)} />
      <p className={style.editCardSideChoice}>Verso</p>
        <input className={style.editCardInput} value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </div>
      
        
     
    </form>
  );
};

export default FlashcardForm;