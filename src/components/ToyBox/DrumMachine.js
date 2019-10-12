import React, { useEffect } from 'react';

import hihat from '../../assets/sounds/drums/hihat.wav';
import kick from '../../assets/sounds/drums/kick.wav';
import snare from '../../assets/sounds/drums/snare.wav';
import tom from '../../assets/sounds/drums/tom.wav';

import kickDrumIcon from '../../assets/DrumMachine/img/kickdrum.png';
import snareDrumIcon from '../../assets/DrumMachine/img/snaredrum2.png';
import tomDrumIcon from '../../assets/DrumMachine/img/floortom2.png';
import hiHatIcon from '../../assets/DrumMachine/img/hihat2.png';

import '../../scss/ToyBox/DrumMachine.scss';

const DrumMachine = ({ lightMode }) => {
  useEffect(() => {
    window.addEventListener('keydown', playSound);
    return () => window.removeEventListener('keydown', playSound);
  });

  return (
    <div className={`DrumMachine__container ${lightMode ? 'lightMode' : ''}`}>
      <div className="controls">
        <button className={`auto-play drums`} onClick={autoPlay}>
          AutoPlay
        </button>
      </div>

      <div className="drum-kit__keys">
        <div
          data-key="75"
          className="key"
          onClick={() => playSound({ keyCode: 75 })}
        >
          <kbd>K</kbd>
          <img alt="tom drum" className="tomDrum" src={tomDrumIcon} />
          <span className="sound">tom</span>
        </div>
        <div
          data-key="74"
          className="key"
          onClick={() => playSound({ keyCode: 74 })}
        >
          <kbd>J</kbd>
          <img alt="snare drum" className="snareDrum" src={snareDrumIcon} />
          <span className="sound">snare</span>
        </div>
        <div
          data-key="68"
          className="key"
          onClick={() => playSound({ keyCode: 68 })}
        >
          <kbd>D</kbd>
          <img alt="kick drum" className="kickDrum" src={kickDrumIcon} />
          <span className="sound">kick</span>
        </div>
        <div
          data-key="83"
          className="key"
          onClick={() => playSound({ keyCode: 83 })}
        >
          <kbd>S</kbd>
          <img alt="hi hat cymbals" className="hihat" src={hiHatIcon} />
          <span className="sound">hihat</span>
        </div>
      </div>
      <audio data-key="83" src={hihat}></audio>
      <audio data-key="68" src={kick}></audio>
      <audio data-key="74" src={snare}></audio>
      <audio data-key="75" src={tom}></audio>
    </div>
  );

  async function autoPlay(e) {
    const drumNums = [83, 68, 74, 75];
    let min = 0,
      max = 4,
      time = 330;
    for (let i = 0; i < 100; i++) {
      let thisNote = 0;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      thisNote = drumNums[rand];
      thisNote = thisNote ? thisNote : 0; //0 for a silence
      setTimeout(() => playSound({ keyCode: thisNote }), i * time);
    }
    return;
  }

  function playSound({ keyCode }) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio
      .play()
      .then(res => {
        key.classList.add('playing');
        setTimeout(() => key.classList.remove('playing'), 100);
      })
      .catch(err => console.log('err', err));
  }
};

export default DrumMachine;
