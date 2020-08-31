import React from 'react';
import './birds-list.css';

const BirdsList = ({ birdGroup, onClick, clickedItems, correctAnswerNumber }) => {

  const elements = birdGroup.map((item) => {
    const { id, name } = item;
    let checkClassName;
    if (clickedItems[id - 1]) {
      if ((id - 1) === correctAnswerNumber) {
        checkClassName = "li-btn text-success fa fa-check-circle-o";
      } else {
        checkClassName = "li-btn text-danger fa fa-times-circle-o";
      }
    } else {
      checkClassName = "li-btn text-info fa fa-circle-o";
    }
    return (
      <li
        key={id}
        onClick={() => onClick(id)}
        className="list-group-item list-item">
        <span className={checkClassName}></span>
        {name}
      </li>
    );
  });

  return (
    <div className="col-12 col-md-6 mb-3 mb-md-0">
      <div className="d-flex justify-content-center align-items-center col-wrapper">
        <ul className="list-group birdlist">
          {elements}
        </ul>
      </div>
    </div>
  );

}

export default BirdsList;