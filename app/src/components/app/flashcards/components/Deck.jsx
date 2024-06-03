import React, { useContext,useState,useEffect } from 'react';
import { DeckContext } from './contexts/DeckContext';
import FlashcardForm from './FlashCardForm';
import Flashcard from './Flashcardss';
import DeckForm from './DeckForm';
import Modal from 'react-modal';
import style from './Deck.module.css';
import { UilBox } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import StudyModal from './StudyModal'; 

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
    flashcards

  } = useContext(DeckContext);

  const [shouldCloseModal, setShouldCloseModal] = useState(true); // Estado para controlar o fechamento do modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para controlar se o modal de edição está aberto
  const [selectedFlashcard, setSelectedFlashcard] = useState(null); // Estado para armazenar o flashcard selecionado para edição
  const [totalFlashcards, setTotalFlashcards] = useState(0);
  const [isStudyModalOpen, setIsStudyModalOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleDeckClick = (deckId) => {
    selectDeck(deckId); // Atualiza o deck selecionado ao clicar no deck
    setShouldCloseModal(false); // Evita que o modal seja fechado ao selecionar um deck
  };

   // Atualiza a contagem total de flashcards sempre que um novo deck é adicionado
   useEffect(() => {
    // Calcula o total de flashcards apenas quando um novo deck for adicionado
    if (decks.length > 0) {
      const totalCount = decks.reduce((acc, curr) => acc + curr.flashcards.length, 0);
      setTotalFlashcards(totalCount);
    }
  }, [decks]);


  const handleModalClose = () => {
    if (shouldCloseModal) {
      closeModal(); // Fecha o modal apenas se shouldCloseModal for verdadeiro
    }
  };

  const handleFlashcardSave = (flashcard) => {
    saveFlashcard(flashcard);
    closeModal(); // Fecha o modal após salvar o flashcard
  };

 
  const openStudyModal = () => {
    setIsStudyModalOpen(true); // Abre o modal de estudo de flashcards
  };

  const closeStudyModal = () => {
    setIsStudyModalOpen(false); // Fecha o modal de estudo de flashcards
  };
  const openEditModal = () => {
    setIsEditModalOpen(true); // Abrir o modal de edição quando o botão de edição for clicado
  };
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleCloseStudyModal = () => {
    setIsStudyModalOpen(false);
    setCurrentCardIndex(0);
    setShowAnswer(false);
  };

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
    setShowAnswer(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false); // Fechar o modal de edição
  };

  const handleSaveEdit = (editedFlashcard) => {
    // Lógica para salvar as alterações no flashcard
    console.log('Flashcard editado:', editedFlashcard);
    setIsEditModalOpen(false); // Fechar o modal de edição após salvar as alterações
  };

  

  return (

    <>
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

        

        {decks.map(deck => (
 
 <div className={style.deck} key={deck.id}>
  <div className={style.caixa}>
  <h2 className={style.tituloCaixa} onClick={() => handleDeckClick(deck.id)}>{deck.name}</h2>
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
  
   


     
   {/* Renderiza apenas os nomes das questões dos flashcards associados ao deck */}
   {deck.flashcards.map(flashcard => (
     <div key={flashcard.id}>
       {flashcard.deckId === deck.id && ( // Verifica se o deckId do flashcard corresponde ao ID do deck atual
         <p>{flashcard.question}</p>
       )}
     </div>
   ))}
  
 </div>
))}

        <div className={style.container}>
      <div className={style.deckList}>
        <button onClick={() => {
          setIsCreatingDeck(true);
          openModal(null);
        }}>Novo Deck</button>
</div>
</div>
      </div>

      <div className={style.container}>
      <div className={style.deckList}>
        <button onClick={() => {
          setIsCreatingDeck(true);
          openModal(null);
        }}>Novo Deck</button>







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
         <h2 className={style.cardSecTitle}>
     
          <div className={style.deck} key={decks.id}>
                <p>Total de cartões: {selectedDeck.flashcards.length}</p> {/* Contagem de cartões */}
        
         
           
           
           
          </div>
       
         </h2>
         
         <button className={style.addCard} onClick={() => openModal(selectedDeck)}>Novo cartão</button>
       </div>
       <div className={style.wrapperEstudar}>
         <h1 className={style.qtdEstudar}>0/2</h1>
         <button className={style.btnEstudar}>Estudar cartões</button>
       </div>
       <div className={style.wrapperTabs}>
         <div className={style.nav}>
           <button className={`${style.tab} ${style.active}`}>Hoje</button>
           <button className={style.tab}>Atuais</button>
           <button className={style.tab}>Concluídas</button>
         </div>
         <div className={style.tarefas}>
           

           {decks.map(deck => (
          <div className={style.deck} key={deck.id}>
            <h2 onClick={() => handleDeckClick(deck.id)}></h2>
            {/* Renderiza apenas os nomes das questões dos flashcards */}
            {deck.flashcards.map(flashcard => (
              <div key={flashcard.id}>
                 {flashcard.deckId === deck.id && ( // Verifica se o deckId do flashcard corresponde ao ID do deck atual
          <p>{flashcard.question}</p>
        )}
                <div className={style.tarefa}>
                <p className={style.tarefaTitle}>{flashcard.question}</p>
                <UilEdit size="14" color="var(--r12)" />
                </div>
              
              </div>
            ))}
           
          </div>
        ))}
         </div>
       </div>
     </div>
          
       
      )}

      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose} style={customStyles}>
        {isCreatingDeck ? (
          <DeckForm onSave={(deck) => {
            saveDeck(deck);
            closeModal(); // Fecha o modal após salvar o deck
          }} />
        ) : (
          <FlashcardForm flashcard={flashcardToEdit} onSave={handleFlashcardSave} />
        )}
      </Modal>
    </div>

   
    </>

    
    
  );
};

export default Deck;