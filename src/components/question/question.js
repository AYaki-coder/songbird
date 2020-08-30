import React from 'react';
import './question.css';

const Question = () => {
  const imgUrl = "./default-image.svg"
  return (
    <div className="random-question jumbotron">
      <img src={imgUrl} alt="bird" className="img"/>
      <div className="col-8 d-flex flex-column justify-content-around">
        <div className="h2 bird-name">Bird name</div>
        <audio controls></audio>
      </div>
    </div>
  );

}

export default Question;