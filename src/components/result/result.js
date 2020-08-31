import React from 'react';
import './result.css';

const Result = ({ maxGameScore, score, restartGame}) => {
  return (
    <div className="jumbotron result">
      <h1 className="display-3 text-center text-warning">Поздравляю!</h1>
      <p className="text-center h2"><i>Ваш результат {score} из {maxGameScore} баллов!</i></p>
        <hr />
       <button
        className="btn btn-info btn-lg try-button"
        onClick={ restartGame }
        >Пройти ещё раз</button> 

      </div>
  );
}

export default Result;