import React, { useState } from 'react';
import QuizCard from "../components/QuizCard";


import "./HomePage.css";

export default function HomePage({
  quizMode,
  selectedDeck,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
  knowItCards,
  setKnowItCards,
  dontKnowItCards,
  setDontKnowItCards,
}) {
  const [ isFinished, setIsFinished ] = useState(false);
  const [ finishTest, setFinishTest ] = useState(false);
  const [ isAnswered, setIsAnswered ] = useState(false);
  const [knowledgeTest, setKnowledgeTest] = useState(false);
  const [isCorrect, setIsCorrect] = useState("null");
  const [userAnswer, setUserAnswer] = useState("");
  const [points, setPoints] = useState(0);

  //incrementa o numero de questoes no cartao

  const incrementQuestionNumber = () => {
    if (questionNumber < selectedDeck.content.length - 1) {
      setIsFinished(false)
      setQuestionNumber(questionNumber + 1);
    } else {
      setIsFinished(true);
      setQuestionNumber(0);
    }
    setCardSide("front");
  };

  const testModeIncrement = () => {
    if (questionNumber < selectedDeck.content.length - 1 && isAnswered === true) {
      setIsFinished(false)
      setQuestionNumber(questionNumber + 1);
    } else if (questionNumber > selectedDeck.content.length && isAnswered === true) {
      setFinishTest(true);
    }
    setIsAnswered(false);
    setCardSide("front");
    setUserAnswer("");
    setIsCorrect("null");
  }


  const decrementQuestionNumber = () => {
    if (questionNumber === 0) {
      setQuestionNumber(selectedDeck.content.length - 1);
    }
    else {
      setQuestionNumber(questionNumber - 1);
    }
    setCardSide("front");
  };

  return (
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <div className="no-quiz">
          
       
        </div>
      ) : (
        <div>
          {isFinished === false && knowledgeTest === false ? (
          <div>
       
         
         
          </div>
          ) : (
          <>
          {knowledgeTest === false && (
            <div>
            
            <div className="selected-deck-title">
             
            </div>
            </div>
            )}
          </>
          )}
          {knowledgeTest === true && (
            <div>
      
            <h3 className="card-number">Score: {points}</h3>
            </div>
          )}
          <div className="quiz-section">
          {knowledgeTest === false && (
            <BsCaretLeftFill
              className="change-question-button"
              onClick={decrementQuestionNumber}
            />)}
            <QuizCard
              setQuestionNumber={setQuestionNumber}
              finishTest={finishTest}
              setFinishTest={setFinishTest}
              isFinished={isFinished}
              setIsFinished={setIsFinished}
              isAnswered={isAnswered}
              setIsAnswered={setIsAnswered}
              points={points}
              setPoints={setPoints}
              isCorrect={isCorrect}
              setIsCorrect={setIsCorrect}
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
              setKnowledgeTest={setKnowledgeTest}
              knowledgeTest={knowledgeTest}
              selectedDeck={selectedDeck}
              questionNumber={questionNumber}
              cardSide={cardSide}
              setCardSide={setCardSide}
            />
            {knowledgeTest === false ? (
            <BsFillCaretRightFill
              className="change-question-button"
              onClick={incrementQuestionNumber}
            />) : (
              <BsFillCaretRightFill
              className="change-question-button"
              onClick={testModeIncrement}
            />
            )}
          </div>
          {knowledgeTest === false && (
          <div className="know-it-button-section">
           
           
          </div>
          )}
        </div>
      )}

    
    </div>
  );
}

