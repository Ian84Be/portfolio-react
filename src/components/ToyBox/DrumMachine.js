import React from 'react';

import hihat from '../../assets/sounds/drums/hihat.wav';
import kick from '../../assets/sounds/drums/kick.wav';
import snare from '../../assets/sounds/drums/snare.wav';
import tom from '../../assets/sounds/drums/tom.wav';

import '../../scss/ToyBox/DrumMachine.scss';

const DrumMachine = () => {
  window.addEventListener('keydown', playSound);
  return (
    <div className="DrumMachine__container">
      <div className="controls">
        <button className="auto-play drums" onClick={autoPlay}>
          AutoPlay Drums
        </button>
      </div>

      <div className="drum-kit__keys">
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
      </div>
      <audio data-key="83" src={hihat}></audio>
      <audio data-key="68" src={kick}></audio>
      <audio data-key="74" src={snare}></audio>
      <audio data-key="75" src={tom}></audio>
    </div>
  );

  function autoPlay(e) {
    const drumNums = [83, 68, 74, 75];
    const guitarNums = [81, 87, 69, 82, 84, 89, 85, 73, 79];
    let min = 0,
      max,
      time,
      type;
    if (e.target.classList.contains('drums')) {
      type = 'drums';
      max = 4;
      time = 330;
      // setPlaying({ drums: true });
    }
    if (e.target.classList.contains('guitar')) {
      type = 'guitar';
      max = 9;
      time = 165;
      // setPlaying({ guitar: true });
    }
    for (let i = 0; i < 100; i++) {
      let thisNote = 0;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      if (type === 'drums') thisNote = drumNums[rand];
      if (type === 'guitar') thisNote = guitarNums[rand];
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
