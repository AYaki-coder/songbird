import React from 'react';
import './header.css';

const Header = ({ score }) => {
  console.log('score', score);
  return (
    <header className="mt-3">
      <div className="col-12 d-flex align-items-end justify-content-between mb-5">
        <div className="d-flex">
          <div className="logo-image"></div>
          <h1 className="logo"><span>Song</span><span className="text-info">bird</span></h1>
        </div>
        <h2 className="score">Score: <span className="text-danger">{ score }</span></h2>
      </div>
      <ul className="birds-group">
        <li className="birds-group-item btn btn-info active">Разминка</li>
        <li className="birds-group-item btn btn-info">Воробьиные</li>
        <li className="birds-group-item btn btn-info">Лесные птицы</li>
        <li className="birds-group-item btn btn-info">Певчие птицы</li>
        <li className="birds-group-item btn btn-info">Хищные птицы</li>
        <li className="birds-group-item btn btn-info">Морские птицы</li>
        
      </ul>
    </header>
  );
};

export default Header;