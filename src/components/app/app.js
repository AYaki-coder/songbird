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
    clickedItems: [ false, false, false, false, false, false,],
    // isItemClicked: false,
  }

  onClick = (id) => {
    // открыть доп инфо
    this.setState(() => {
      return ({
        clickedBird: id - 1,
      });
    });
    // проверить кликался ли раньше
    if(this.checkItemStatus(id)){
      this.setClickedStatus(id);
      this.onAnswer(id);

    }
    // если да, вызвать onAnswer
  }
  setClickedStatus = (id) => {
    this.setState(({ clickedItems }) => {
      const inx = id - 1;
      const newStatus = true;
      const newArray = [...clickedItems.slice(0, inx), newStatus,...clickedItems.slice(inx + 1)];
      console.log('новый массив', newArray);
      return {
        clickedItems: newArray,
      };
    });
  }
  checkItemStatus = (id) => {
    
    if(!this.state.isAnswerCorrect){
      if(!this.state.clickedItems[id - 1])
      return true;
    }
    return false;
  }
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
            clickedItems ={ this.state.clickedItems }
            correctAnswerNumber = { this.state.correctAnswerNumber }
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