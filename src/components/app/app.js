import React, { Component } from 'react';
import './app.css';
import birdData from '../../birds-config/birds-config';

import Header from '../header';
import Question from '../question';
import BirdsList from '../birds-list';
import BirdDetails from '../bird-details';
import NextLvlButton from '../next-level-button'

export default class App extends Component {
  state = {
    gameStep: 2,
    isAnswerCorrect: false,
    correctAnswerNumber: 4,
    clickedBird: null,
  }

  onClick = (id) => {
    // открыть доп инфо
    this.setState(() => {
      console.log("птица", id - 1)
      return ({
        clickedBird: id - 1,
      });
    });
    // проверить кликался ли раньше
    // если да, вызвать onAnswer
  }
  // openBirdDetails = (id, round) => {

  // }

  onAnswer = (id) => {
    console.log('rightID', this.state.correctAnswerNumber + 1, 'myAnswer:', id);
    if (id === (this.state.correctAnswerNumber + 1)) {
      this.setState(() => {
        return {
          isAnswerCorrect: true,
        };
      });
    }
  }

  render() {
    return (
      <div className="container wrapper">
        < Header />
        < Question
          bird={birdData[this.state.gameStep][this.state.correctAnswerNumber]}
          isAnswerCorrect={this.state.isAnswerCorrect}
        />
        <div className="row d-flex">
          < BirdsList
            birdGroup={birdData[this.state.gameStep]}
            isAnswerCorrect={this.state.isAnswerCorrect}
            onClick = {this.onClick}
            // onAnswer={this.onAnswer}
          />
          < BirdDetails
            isNull ={this.state.clickedBird}
            birds={ birdData[this.state.gameStep]}
          />
        </div>
        < NextLvlButton />
      </div>
    );
  };
};