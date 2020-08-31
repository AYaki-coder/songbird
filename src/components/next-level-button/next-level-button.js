import React from 'react';
import './next-level-button.css';

const NextLvlButton = ({isAnswerCorrect, isNextRound}) => {
  let className = "btn w-100"
  let click = null;
  if(isAnswerCorrect){
    className +=" btn-info";
    click = isNextRound;
  } else {
    className +=" btn-secondary disabled"
  }
  return (
    <button 
      className={className}
      onClick = {click}
    >
      Следующий вопрос
    </button>
  );

}

export default NextLvlButton;