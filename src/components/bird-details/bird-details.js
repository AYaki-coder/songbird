import React from 'react';
import './bird-details.css';

const BirdDetails = () => {

  return (
    <div className="col-6">
      <div className="col-wrapper p-3">
        <div className="d-flex justify-content-between mb-3">
          <img className="img" src="#" alt="bird" />
          <div className="col-6 d-flex flex-column justify-content-between">
            <ul className="list-group">
              <li className="list-group-item item h5">Bird name</li>
              <li className="list-group-item item h6">Bird name</li>
            </ul>
            <div className="player"><audio controls></audio></div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore sunt impedit laborum dolor eos reprehenderit qui molestiae, in itaque, numquam temporibus,
          corrupti quasi minima quae dicta nostrum quidem ipsum expedita velit quas. Sit numquam at accusamus dolores?
        </p>
      </div>
    </div>
  );

}

export default BirdDetails;