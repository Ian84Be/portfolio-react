import React from 'react';

import hihat from '../../assets/sounds/drums/hihat.wav';
import kick from '../../assets/sounds/drums/kick.wav';
import snare from '../../assets/sounds/drums/snare.wav';
import tom from '../../assets/sounds/drums/tom.wav';

import cg1 from '../../assets/sounds/guitar/c-min-penta/cg-1.wav';
import cg2 from '../../assets/sounds/guitar/c-min-penta/cg-2.wav';
import cg3 from '../../assets/sounds/guitar/c-min-penta/cg-3.wav';
import cg4 from '../../assets/sounds/guitar/c-min-penta/cg-4.wav';
import cg5 from '../../assets/sounds/guitar/c-min-penta/cg-5.wav';
import cg6 from '../../assets/sounds/guitar/c-min-penta/cg-6.wav';
import cg7 from '../../assets/sounds/guitar/c-min-penta/cg-7.wav';
import cg8 from '../../assets/sounds/guitar/c-min-penta/cg-8.wav';
import cg9 from '../../assets/sounds/guitar/c-min-penta/cg-9.wav';

import '../../scss/Projects/MusicBox.scss';

const MusicBox = () => {
  window.addEventListener('keydown', playSound);
  return (
    <div className="music-box__container">
      <div className="controls">
        <button className="auto-play guitar" onClick={autoPlay}>
          AutoPlay Guitar
        </button>
      </div>

      <div className="guitar__keys">
        <div data-key="81" className="key">
          <kbd>Q</kbd>
          <span className="sound">C3</span>
        </div>
        <div data-key="87" className="key">
          <kbd>W</kbd>
          <span className="sound">Eb3</span>
        </div>
        <div data-key="69" className="key">
          <kbd>E</kbd>
          <span className="sound">G3</span>
        </div>
        <div data-key="82" className="key">
          <kbd>R</kbd>
          <span className="sound">C4</span>
        </div>
        <div data-key="84" className="key">
          <kbd>T</kbd>
          <span className="sound">Eb4</span>
        </div>
        <div data-key="89" className="key">
          <kbd>Y</kbd>
          <span className="sound">G4</span>
        </div>
        <div data-key="85" className="key">
          <kbd>U</kbd>
          <span className="sound">C5</span>
        </div>
        <div data-key="73" className="key">
          <kbd>I</kbd>
          <span className="sound">Eb5</span>
        </div>
        <div data-key="79" className="key">
          <kbd>O</kbd>
          <span className="sound">G5</span>
        </div>
      </div>

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

      <audio data-key="81" src={cg1}></audio>
      <audio data-key="87" src={cg2}></audio>
      <audio data-key="69" src={cg3}></audio>
      <audio data-key="82" src={cg4}></audio>
      <audio data-key="84" src={cg5}></audio>
      <audio data-key="89" src={cg6}></audio>
      <audio data-key="85" src={cg7}></audio>
      <audio data-key="73" src={cg8}></audio>
      <audio data-key="79" src={cg9}></audio>
      {/*     
    <audio data-key="81" src="sounds/guitar/c-min-triad/cg-1.wav"></audio>
    <audio data-key="87" src="sounds/guitar/c-min-triad/cg-2.wav"></audio>
    <audio data-key="69" src="sounds/guitar/c-min-triad/cg-3.wav"></audio>
    <audio data-key="82" src="sounds/guitar/c-min-triad/cg-4.wav"></audio>
    <audio data-key="84" src="sounds/guitar/c-min-triad/cg-5.wav"></audio>
    <audio data-key="89" src="sounds/guitar/c-min-triad/cg-6.wav"></audio>
    <audio data-key="85" src="sounds/guitar/c-min-triad/cg-7.wav"></audio>
    <audio data-key="73" src="sounds/guitar/c-min-triad/cg-8.wav"></audio>
		<audio data-key="79" src="sounds/guitar/c-min-triad/cg-9.wav"></audio> 
		 */}
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

export default MusicBox;
