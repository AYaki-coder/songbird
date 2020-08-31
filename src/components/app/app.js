import React, { Component } from 'react';
import './app.css';
import birdData from '../../birds-config/birds-config';
import { randomNumber } from '../../helpers/helpers'

import Header from '../header';
import Question from '../question';
import BirdsList from '../birds-list';
import BirdDetails from '../bird-details';
import NextLvlButton from '../next-level-button'

export default class App extends Component {
  maxScore = 5;
  state = {
    gameRound: 0,
    isAnswerCorrect: false,
    correctAnswerNumber: randomNumber(6),
    clickedBird: null,
    clickedItems: [false, false, false, false, false, false,],
    score: 0,
  }

  onClick = (id) => {
    this.setState(() => {
      return ({
        clickedBird: id - 1,
      });
    });
    if (this.checkItemStatus(id)) {
      console.log('неправильный ответ')
      this.setClickedStatus(id);
      this.onAnswer(id);
    }

  }
  playAnswerSound = (isCorrectAnswer) => {
    document.querySelectorAll('.answerPlayer').forEach((el) => {
      el.pause();
      el.currentTime = 0;
    });
    if (isCorrectAnswer) {
      document.querySelectorAll('.audio').forEach((el) => {
        el.pause();
      });
      document.getElementById('correctAnswer').play();
    } else {
      document.getElementById('wrongAnswer').play();
    }
  }
  setClickedStatus = (id) => {

    this.setState(({ clickedItems }) => {
      console.log(clickedItems);
      const inx = id - 1;
      const newStatus = true;
      const newArray = [...clickedItems.slice(0, inx), newStatus, ...clickedItems.slice(inx + 1)];
      console.log('статус кликнули', newArray);
      return {
        clickedItems: newArray,
      };
    });
  }
  checkItemStatus = (id) => {

    if (!this.state.isAnswerCorrect) {
      if (!this.state.clickedItems[id - 1])
        return true;
    }
    return false;
  }
  onAnswer = (id) => {
    if (id === (this.state.correctAnswerNumber + 1)) {
      this.playAnswerSound(true);

      this.setState(({ score, clickedItems }) => {

        const newScore = score + this.maxScore - this.calcWrongAnswers(clickedItems);
        return {
          score: newScore,
          isAnswerCorrect: true,
        };
      });
    } else {
      this.playAnswerSound(false);
    }
  }

  calcWrongAnswers = (arr) => {

    return arr.filter((el) => el).length - 1;
  }

  isNextRound = () => {

    this.setState(() => {
      const newRound = this.state.gameRound + 1;
      console.log('next round', newRound);
      return ({
        gameRound: newRound,
        isAnswerCorrect: false,
        correctAnswerNumber: randomNumber(6),
        clickedBird: null,
        clickedItems: [false, false, false, false, false, false,],
      });
    });
  }

  render() {
    return (
      <div className="container wrapper">
        < Header
          score={this.state.score}
          gameRound={this.state.gameRound}
        />
        < GameComponents 
          state = {this.state}
          onClick = { this.onClick }
          isNextRound = { this.isNextRound}
        />
        
      </div>
    );
  };
};

const GameComponents = ({ state, onClick, isNextRound}) => {
  const { gameRound, correctAnswerNumber, isAnswerCorrect, clickedItems, 
          clickedBird, } = state;
  return (
    < React.Fragment>
      < Question
        bird={birdData[gameRound][correctAnswerNumber]}
        isAnswerCorrect={isAnswerCorrect}
      />
      <div className="row d-flex">
        < BirdsList
          birdGroup={birdData[gameRound]}
          isAnswerCorrect={isAnswerCorrect}
          onClick={onClick}
          clickedItems={clickedItems}
          correctAnswerNumber={correctAnswerNumber}
        />
        < BirdDetails
          isNull={clickedBird}
          birds={birdData[gameRound]}
        />
      </div>
      < NextLvlButton
        isAnswerCorrect={isAnswerCorrect}
        isNextRound={isNextRound}
      />
      <audio className="audio answerPlayer" id="correctAnswer" src="./win.mp3"></audio>
      <audio className="audio answerPlayer" id="wrongAnswer" src="./error.mp3"></audio>
    </ React.Fragment >
  )
}
