import React, { useState } from 'react';
import style from './ModalNewCard.module.css'; // Importe seu arquivo de estilo CSS para estilizar o modal, se necessário

const ModalNewCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <button
       onClick={openModal}
       className={style.btnModal}>
       <p className={style.btnTextAdd}>Nova Caixa</p>
       </button>


      {isOpen &&(
 <div className={style.modal} >
 
<div className={style.modalContent}>
 <h2>Hello Modal</h2>
 <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
   perferendis suscipit officia recusandae, eveniet quaerat assumenda
   id fugit, dignissimos maxime non natus placeat illo iusto!
   Sapiente dolorum id maiores dolores? Illum pariatur possimus
   quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
   placeat tempora vitae enim incidunt porro fuga ea.
 </p>

</div>
</div>

 )  }

</div>
    
  );
}

export default ModalNewCard;