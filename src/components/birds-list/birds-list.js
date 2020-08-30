import React from 'react';
import './birds-list.css';

const BirdsList = ({ birdGroup, onClick }) => {

  const elements = birdGroup.map((item) => {
        const { id, name } = item;

        return (
          <li 
          key={id}
          onClick={ () => onClick(id)}
          className="list-group-item list-item">
            <span className="li-btn text-info fa fa-circle-o"></span>
            {name}
          </li>  
        );
  });

  return (
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center col-wrapper">
        <ul className="list-group birdlist">
          { elements }
          {/* <li className="list-group-item list-item"><span className="li-btn text-info fa fa-circle-o"></span>name of bird</li>
          <li className="list-group-item list-item"><span className="li-btn text-success fa fa-check-circle-o"></span>name of bird</li>
          <li className="list-group-item list-item"><span className="li-btn text-danger fa fa-times-circle-o"></span>name of bird</li>
          <li className="list-group-item list-item"><span className="li-btn text-info fa fa-circle-o"></span>name of bird</li>
          <li className="list-group-item list-item"><span className="li-btn text-info fa fa-circle-o"></span>name of bird</li>
          <li className="list-group-item list-item"><span className="li-btn text-info fa fa-circle-o"></span>name of bird</li> */}
        </ul>
      </div>
    </div>
  );

}

export default BirdsList;