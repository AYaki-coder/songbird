import React from 'react';
import './result.css';

const Result = ({ maxGameScore, score, restartGame }) => {
  const content = score === maxGameScore ? < MaxScore /> : < Score score={score} maxGameScore={maxGameScore} restartGame={restartGame} />;
  return (
    <div className="jumbotron result">
      {content}

    </div>
  );
}

const Score = ({ score, maxGameScore, restartGame,}) => {
  return (
    < React.Fragment>
      <h1 className="display-3 text-center text-warning">Поздравляю!</h1>
      <div className="text-center h2"><i>Ваш результат {score} из {maxGameScore} баллов!</i><img className="winbird" src="./bird.gif" alt="#"/></div>
      <hr />
      <button
        className="btn btn-info btn-lg try-button"
        onClick={restartGame}
      >Пройти ещё раз</button>
    </React.Fragment>
  );
}

const MaxScore = () => {
  
  return (
    < React.Fragment>
    <div className="d-flex flex-column flex-sm-row align-items-center mb-5"><img className="winbird" src="./B7JB.gif" alt="#"/>
    <h1 className="display-3 text-center text-danger wintext">Да Вы просто знаток!</h1>
    </div>
    <p className="text-center text-primary h2 card bg-light pt-3 pb-3 wintext">Еще больше о птицах и их голосах можно узнать <a href="https://dibird.com/ru/">здесь</a></p>
    </React.Fragment>
  );
}
export default Result;