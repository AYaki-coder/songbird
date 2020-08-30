import React, { Component } from 'react';
import './question.css';

export default class Question extends Component {

  state = {
    imgUrl: "./default-image.svg",
    birdName: "**************",
  }


  render() {
    const { bird, isAnswerCorrect } = this.props;
    // const { imgUrl, birdName } = this.state;
    console.log(bird.name, isAnswerCorrect);
    const imgUrl = isAnswerCorrect ? bird.image : this.state.imgUrl;
    const birdName = isAnswerCorrect ? bird.name : this.state.birdName;
    return (
      <div className="random-question jumbotron">
        <img src={imgUrl} alt="bird" className="img" />
        <div className="col-8 d-flex flex-column justify-content-around">
          <div className="h2 bird-name">{birdName}</div>
          <audio controls src={ bird.audio }></audio>
        </div>
      </div>
    );
  }

}
