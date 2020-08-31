import React from 'react';
import './header.css';

const Header = ({ score, gameRound }) => {
  const birdsType = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы' ];
  let keyValue = -1;

  const elements = birdsType.map((item) => {
    keyValue += 1;
    let className = "birds-group-item btn btn-info";
    if(gameRound === keyValue){
      className += " active";
    }

    return (
      <li key={keyValue} className={ className }>
        {item}
      </li>
    );
  });
  return (
    <header className="mt-3">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center flex-sm-row align-items-sm-end justify-content-sm-between mb-5">
        <div className="d-flex mb-2 mb-sm-0">
          <div className="logo-image"></div>
          <h1 className="logo"><span>Song</span><span className="text-info">bird</span></h1>
        </div>
        <h2 className="score">Счёт: <span className="text-danger">{ score }</span></h2>
      </div>
      <ul className="birds-group">
        { elements }        
      </ul>
    </header>
  );
};

export default Header;