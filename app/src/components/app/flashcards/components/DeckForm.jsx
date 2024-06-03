import React, { useState } from 'react';
import style from './DeckForm.module.css'
import { UilTimes } from '@iconscout/react-unicons'
import { UilCheck } from '@iconscout/react-unicons'

const DeckForm = ({ deck, onSave }) => {
  const [name, setName] = useState(deck?.name || '');

  const handleSubmit = (e) => {
    if (name.trim() !== '') {
      e.preventDefault();
      onSave({ ...deck, name });
    }
    else{
      alert("informe um valor valido")
    }    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.smallCard}>
        <div className={style.editCardButtons}>
        <button
         className={style.btnFechar}>
         
         <UilTimes color="#F2E5FF"></UilTimes>
         </button>

      

         <button type='submit' 
         className={style.btnSalvar}
         
        >
           <UilCheck color="#F2E5FF" className='icon'></UilCheck>
          
        </button>
             

        </div>

     
        
        
      </div>
      <p className={style.deckTitle}>Novo Deck</p>
      <input className={style.input} value={name} onChange={(e) => setName(e.target.value)} />
    </form>
  );
};

export default DeckForm;