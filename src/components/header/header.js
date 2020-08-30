import React from 'react';
import './header.css';

const Header = () => {

  return (
    <header className="mt-3">
      <div className="col-12 d-flex align-items-end justify-content-between mb-5">
        <div className="d-flex">
          <div className="logo-image"></div>
          <h1 className="logo"><span>Song</span><span className="text-info">bird</span></h1>
        </div>
        <h2 className="score">Score: <span className="text-danger">0</span></h2>
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

// const AppHeader = ({toDo, done}) => {
//   return (
//     <div className="app-header d-flex">
//       <h1>Todo List</h1>
//       <h2>{toDo} more to do, {done} done</h2>
//     </div>
//   );
// };

// export default AppHeader;