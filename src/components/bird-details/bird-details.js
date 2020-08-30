import React, { Component } from 'react';
import './bird-details.css';

export default class BirdDetails extends Component {

  state = {
    imgUrl: null,
    name: null,
    species: null,
    audio: null,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Tempore sunt impedit laborum dolor eos reprehenderit qui molestiae, in itaque, numquam temporibus,corrupti quasi minima quae dicta nostrum quidem ipsum expedita velit quas. Sit numquam at accusamus dolores?",

  }
  
  render() {
    const { birds, isNull } = this.props;
    let isBird = false;
    
    const bird1 = {
      imgUrl: null,
      name: "Lorem",
      species: "Lorem",
      audio: null,
      description: "Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.",
    }
    if (isNull !== null) {
      isBird = true;
      bird1.imgUrl = birds[isNull].image;
      bird1.name = birds[isNull].name;
      bird1.species = birds[isNull].species;
      bird1.audio = birds[isNull].audio;
      bird1.description = birds[isNull].description;
    }
    const defaultClassName = isBird ? 'd-none' : 'defaultClass';
    const infoClassName = isBird ? '': 'hidden';
    return (
      <div className="col-6">

        <div className="col-wrapper p-3">
          <div className={defaultClassName}>
            Послушайте плеер.
            Выберите птицу из списка
          </div>
          <div className={ infoClassName }>
            <div className="d-flex justify-content-between mb-3">
              <img className="img" src={bird1.imgUrl} alt={bird1.name} />
              <div className="col-6 d-flex flex-column justify-content-between">
                <ul className="list-group">
                  <li className="list-group-item item h5">{bird1.name}</li>
                  <li className="list-group-item item h6">{bird1.species}</li>
                </ul>
                <div className="player"><audio  className="audio" src={bird1.audio} controls></audio></div>
              </div>
            </div>
            <p>
              {bird1.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}