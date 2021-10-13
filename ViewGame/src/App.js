import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import A from './img/A.jpg';
function App() {
  const [cards, setCards] = useState(['A', 'K', 'Q', '4', '5', '6']);
  return (
    <React.Fragment>
      <div className="container">
        <div className="bcr-top">
          <div className="player">PLAYER</div>
          <div className="banker">BANKER</div>
        </div>
        <div className="cards">
          <div className="cards__item">
            <div className="card">
              <img src={require(`./img/${cards[0]}.jpg`).default} />
            </div>
            <div className="card">
              {' '}
              <img src={require(`./img/${cards[1]}.jpg`).default} />
            </div>
            <div className="card">
              {' '}
              <img src={require(`./img/${cards[2]}.jpg`).default} />
            </div>
          </div>
          <div className="cards__item">
            <div className="card">
              {' '}
              <img src={require(`./img/${cards[3]}.jpg`).default} />
            </div>
            <div className="card">
              {' '}
              <img src={require(`./img/${cards[4]}.jpg`).default} />
            </div>
            <div className="card">
              {' '}
              <img src={require(`./img/${cards[5]}.jpg`).default} />
            </div>
          </div>
        </div>
        <div className="options">
          <div className="options__center">
            <span style={{ color: '#3cf24e' }} className="option">
              TIE
            </span>
            <span style={{ color: 'yellow' }} className="option">
              BANKER
            </span>
            <span style={{ color: 'rgb(117, 35, 35)' }} className="option">
              PLAYER
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(App);
