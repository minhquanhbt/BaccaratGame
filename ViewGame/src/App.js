import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import A from './img/A.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'axios/lib/helpers/cookies';
import { getResult } from './Api';
function App() {
  const [cards, setCards] = useState(['A', 'K', 'Q', '4', '5', '6']);
  const [win, setWin] = useState('Player wins');
  const [sugges, setSugges] = useState('Player');
  const [tik, setTik] = useState(false);
  const notify = () => {
    toast(sugges);
    setTik(true);
  };
  const fetchAPI = async () => {
    await getResult()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => Error(error.toString()));
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div>
          <ToastContainer />
        </div>
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
            <span
              rel="wobble-bottom"
              style={{ color: '#3cf24e' }}
              className={sugges == 'Tie' ? 'option wobble-bottom' : 'option'}
            >
              TIE
            </span>
            <span
              style={{ color: 'yellow' }}
              className={sugges == 'Banker' ? 'option wobble-bottom' : 'option'}
            >
              BANKER
            </span>
            <span
              style={{ color: 'rgb(117, 35, 35)' }}
              className={
                sugges == 'Player' && tik ? 'option wobble-bottom' : 'option'
              }
            >
              PLAYER
            </span>
          </div>
        </div>

        <div className="start" onClick={notify}>
          Start
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(App);
