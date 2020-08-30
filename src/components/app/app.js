import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import Question from '../question';
import BirdsList from '../birds-list';
import BirdDetails from '../bird-details';
import NextLvlButton from '../next-level-button'

export default class App extends Component {

  render() {
    return (
      <div className="container wrapper">
        < Header />
        < Question />
        <div className="row d-flex">
        < BirdsList />
        < BirdDetails />
        </div>
        < NextLvlButton />
      </div>
    );
  };
};