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
    document.querySelectorAll('.answerPlayer').forEach((el) =>{
      el.pause();
      el.currentTime = 0;
    });
    if(isCorrectAnswer) {
      document.querySelectorAll('.audio').forEach((el) =>{
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
      
      this.setState(({score, clickedItems}) => {

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

  render() {
    return (
      <div className="container wrapper">
        < Header
          score={this.state.score}
          gameRound={this.state.gameRound}
        />
        < Question
          bird={birdData[this.state.gameRound][this.state.correctAnswerNumber]}
          isAnswerCorrect={this.state.isAnswerCorrect}
        />
        <div className="row d-flex">
          < BirdsList
            birdGroup={birdData[this.state.gameRound]}
            isAnswerCorrect={this.state.isAnswerCorrect}
            onClick={this.onClick}
            clickedItems={this.state.clickedItems}
            correctAnswerNumber={this.state.correctAnswerNumber}
          />
          < BirdDetails
            isNull={this.state.clickedBird}
            birds={birdData[this.state.gameRound]}
          />
        </div>
        < NextLvlButton />
        <audio className="audio answerPlayer" id="correctAnswer" src="./win.mp3"></audio>
        <audio className="audio answerPlayer" id="wrongAnswer" src="./error.mp3"></audio>

      </div>
    );
  };
};