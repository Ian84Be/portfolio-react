import React, { useEffect, useState } from 'react';

import cg1P from '../../assets/guitar/c-min-penta/cg-1.wav';
import cg2P from '../../assets/guitar/c-min-penta/cg-2.wav';
import cg3P from '../../assets/guitar/c-min-penta/cg-3.wav';
import cg4P from '../../assets/guitar/c-min-penta/cg-4.wav';
import cg5P from '../../assets/guitar/c-min-penta/cg-5.wav';
import cg6P from '../../assets/guitar/c-min-penta/cg-6.wav';
import cg7P from '../../assets/guitar/c-min-penta/cg-7.wav';
import cg8P from '../../assets/guitar/c-min-penta/cg-8.wav';
import cg9P from '../../assets/guitar/c-min-penta/cg-9.wav';

import cg1T from '../../assets/guitar/c-min-triad/cg-1.wav';
import cg2T from '../../assets/guitar/c-min-triad/cg-2.wav';
import cg3T from '../../assets/guitar/c-min-triad/cg-3.wav';
import cg4T from '../../assets/guitar/c-min-triad/cg-4.wav';
import cg5T from '../../assets/guitar/c-min-triad/cg-5.wav';
import cg6T from '../../assets/guitar/c-min-triad/cg-6.wav';
import cg7T from '../../assets/guitar/c-min-triad/cg-7.wav';
import cg8T from '../../assets/guitar/c-min-triad/cg-8.wav';
import cg9T from '../../assets/guitar/c-min-triad/cg-9.wav';

import '../../scss/ToyBox/GuitBox.scss';

const GuitBox = ({ lightMode }) => {
  const [mode, setMode] = useState('c-min-triad');

  useEffect(() => {
    window.addEventListener('keydown', playSound);
    return () => window.removeEventListener('keydown', playSound);
  });

  return (
    <div className={`GuitBox__container ${lightMode ? 'lightMode' : ''}`}>
      <div className="guitar__keys">
        <div
          data-key="81"
          className="key"
          onClick={() => playSound({ keyCode: 81 })}
        >
          <span className="sound">C3</span>
          <kbd>Q</kbd>
        </div>
        <div
          data-key="87"
          className="key"
          onClick={() => playSound({ keyCode: 87 })}
        >
          <span className="sound">Eb3</span>
          <kbd>W</kbd>
        </div>
        <div
          data-key="69"
          className="key"
          onClick={() => playSound({ keyCode: 69 })}
        >
          <span className="sound">G3</span>
          <kbd>E</kbd>
        </div>
        <div
          data-key="82"
          className="key"
          onClick={() => playSound({ keyCode: 82 })}
        >
          <span className="sound">C4</span>
          <kbd>R</kbd>
        </div>
        <div
          data-key="84"
          className="key"
          onClick={() => playSound({ keyCode: 84 })}
        >
          <span className="sound">Eb4</span>
          <kbd>T</kbd>
        </div>
        <div
          data-key="89"
          className="key"
          onClick={() => playSound({ keyCode: 89 })}
        >
          <span className="sound">G4</span>
          <kbd>Y</kbd>
        </div>
        <div
          data-key="85"
          className="key"
          onClick={() => playSound({ keyCode: 85 })}
        >
          <span className="sound">C5</span>
          <kbd>U</kbd>
        </div>
        <div
          data-key="73"
          className="key"
          onClick={() => playSound({ keyCode: 73 })}
        >
          <span className="sound">Eb5</span>
          <kbd>I</kbd>
        </div>
        <div
          data-key="79"
          className="key"
          onClick={() => playSound({ keyCode: 79 })}
        >
          <span className="sound">G5</span>
          <kbd>O</kbd>
        </div>
      </div>

      <div className="controls">
        <input type="range" min="0" max="1" onChange={handleChange} />
        <button className="auto-play" onClick={autoPlay}>
          AutoPlay
        </button>
      </div>

      <audio data-mode="c-min-penta" data-key="81" src={cg1P}></audio>
      <audio data-mode="c-min-penta" data-key="87" src={cg2P}></audio>
      <audio data-mode="c-min-penta" data-key="69" src={cg3P}></audio>
      <audio data-mode="c-min-penta" data-key="82" src={cg4P}></audio>
      <audio data-mode="c-min-penta" data-key="84" src={cg5P}></audio>
      <audio data-mode="c-min-penta" data-key="89" src={cg6P}></audio>
      <audio data-mode="c-min-penta" data-key="85" src={cg7P}></audio>
      <audio data-mode="c-min-penta" data-key="73" src={cg8P}></audio>
      <audio data-mode="c-min-penta" data-key="79" src={cg9P}></audio>

      <audio data-mode="c-min-triad" data-key="81" src={cg1T}></audio>
      <audio data-mode="c-min-triad" data-key="87" src={cg2T}></audio>
      <audio data-mode="c-min-triad" data-key="69" src={cg3T}></audio>
      <audio data-mode="c-min-triad" data-key="82" src={cg4T}></audio>
      <audio data-mode="c-min-triad" data-key="84" src={cg5T}></audio>
      <audio data-mode="c-min-triad" data-key="89" src={cg6T}></audio>
      <audio data-mode="c-min-triad" data-key="85" src={cg7T}></audio>
      <audio data-mode="c-min-triad" data-key="73" src={cg8T}></audio>
      <audio data-mode="c-min-triad" data-key="79" src={cg9T}></audio>
    </div>
  );

  function handleChange(e) {
    let toggle = parseFloat(e.target.value);
    return toggle === 1 ? setMode('c-min-triad') : setMode('c-min-penta');
  }

  function autoPlay(e) {
    const guitarNums = [81, 87, 69, 82, 84, 89, 85, 73, 79];
    const min = 0,
      max = 9,
      time = 165;
    for (let i = 0; i < 100; i++) {
      let thisNote = 0;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      thisNote = guitarNums[rand];
      thisNote = thisNote ? thisNote : 0; //0 for a silence
      setTimeout(() => playSound({ keyCode: thisNote }), i * time);
    }
    return;
  }

  function playSound({ keyCode }) {
    const audio = document.querySelector(
      `audio[data-key="${keyCode}"][data-mode="${mode}"]`
    );
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

export default GuitBox;
