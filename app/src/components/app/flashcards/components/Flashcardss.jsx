import React from 'react';

const Flashcard = ({ flashcard, onEdit }) => {
  return (
    <div className="flashcard">
      <h3>{flashcard.question}</h3>
      <p>{flashcard.answer}</p>
      <button onClick={() => onEdit(flashcard)}>Edit</button>
    </div>
  );
};

export default Flashcard;