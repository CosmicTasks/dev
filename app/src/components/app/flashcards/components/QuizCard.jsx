import { useState, useEffect } from "react";


import style from './QuizCard.module.css'
import { UilTimes } from '@iconscout/react-unicons'


export default function QuizCard({
  setQuestionNumber,
  setFinishTest,
  finishTest,
  setIsAnswered,
  points,
  setPoints,
  isCorrect,
  setIsCorrect,
  userAnswer,
  setUserAnswer,
  setKnowledgeTest,
  knowledgeTest,
  selectedDeck,
  questionNumber,
  cardSide,
  setCardSide,
  setQuizMode,
  setAddQuestionsView,
  quizMode
}) 


{
  const [cardContent, setCardContent] = useState(
    selectedDeck.content[questionNumber]
  );

  const checkUserAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase() === cardContent.back.toLowerCase()) {
      setIsCorrect("true");
      setPoints(points + 10);
    } else {
      setIsCorrect("false");
    }
    setIsAnswered(true);
    isLastQuestion();
  }

  const isLastQuestion = () => {
    if (questionNumber === selectedDeck.content.length - 1) {
      setQuestionNumber(selectedDeck.content.length + 1)
    }
  }

  const reset = () => {
    setFinishTest(false)
    setIsCorrect("null")
    setUserAnswer("")
    setPoints(0)
    setQuestionNumber(0)
  }

  useEffect(() => {
    setCardSide("front");
  }, [setCardSide]);

  useEffect(() => {
    setCardContent(selectedDeck.content[questionNumber]);
  }, [cardContent, questionNumber, selectedDeck]);

  const flipCard = () => {
    cardSide === "front" ? setCardSide("back") : setCardSide("front");
  };

 
  const [modalIsOpen,setIsOpen]=useState(false)

    function openModal(){
    setIsOpen(true)

   
  }


  return (
    
  
    
    <div className={style.quizCard}>
      <div className={style.wrapper}>
      <UilTimes 
      className={style.closeIcon}
    
     
      ></UilTimes>

      
      <h3 className="card-number">{`${questionNumber + 1}/${
            selectedDeck.content.length
          }`}</h3>
      </div>
     
      <div className="quiz-card-top">
       
      </div>
      <div className={style.quizCardContent}>
        <>
        {selectedDeck.content.length === 0 ? (
          <p></p>
        ) : (
          <div>
            {cardSide === "front" ? (
              <>
              {isCorrect === "null" && finishTest === false && (<p className={style.text}>{cardContent?.front}</p>)}
              </>
            ) : (
              <p className={style.text}>{cardContent.back}</p>
            )}


          </div>

          
        )}
        {knowledgeTest === true && (
          <>
          <div style={{'display': 'flex', 'flexDirection': 'column'}} className="test-mode">
          {isCorrect === "null" && finishTest === false && (
          <>
          <input className="selected-deck-title" 
            style={{'marginBottom': '20px'}}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}/>
            <button className="buttonCards" onClick={() => checkUserAnswer(userAnswer)}>
            </button>
          </>
          )}
          {isCorrect === "true" && (<img src={correct} className="result-icon" alt="correct-icon"/>)}
          {isCorrect === "false" && (<img src={incorrect} className="result-icon" alt="incorrect-icon"/>)}
          {finishTest === true && (
          <div>
           
            <button onClick={reset} className="buttonCards">Retake Test</button>
          </div>)}
            <button className="buttonCards" onClick={() => {
              reset();
              setKnowledgeTest(false);
              }}
              ></button>
          </div>
          </>
        )}
        </>
      </div>
      {knowledgeTest === false && (<button className={style.flipButton} 
        onClick={flipCard}>Mostrar Respostas</button> )}
      <div className="quiz-card-bottom"></div>
    </div>


  );
}
