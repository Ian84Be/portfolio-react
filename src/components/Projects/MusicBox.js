import React from 'react';

const MusicBox = () => {
  // window.addEventListener('keydown', playSound);
  // const keys = document.querySelectorAll('.key');
  // keys.forEach(k => k.addEventListener('transitionend', removeTransition));

  // const autoPlayButtons = document.querySelectorAll('.auto-play');
  // autoPlayButtons.forEach(b => b.addEventListener('click', autoPlay));

  // function autoPlay(e) {
  //   const drumNums = [83, 68, 74, 75];
  //   const guitarNums = [81, 87, 69, 82, 84, 89, 85, 73, 79];
  //   let min = 0,
  //     max,
  //     time,
  //     type;
  //   if (e.target.classList.contains('drums')) {
  //     (type = 'drums'), (max = 4), (time = 330);
  //   }
  //   if (e.target.classList.contains('guitar')) {
  //     (type = 'guitar'), (max = 9), (time = 165);
  //   }
  //   for (let i = 0; i < 100; i++) {
  //     let thisNote = 0;
  //     let rand = Math.floor(Math.random() * (max - min + 1) + min);
  //     if (type === 'drums') thisNote = drumNums[rand];
  //     if (type === 'guitar') thisNote = guitarNums[rand];
  //     thisNote = thisNote ? thisNote : 0; //0 for a silence
  //     setTimeout(() => playSound({ keyCode: thisNote }), i * time);
  //   }
  //   return;
  // }

  // function playSound({ keyCode }) {
  //   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  //   if (!audio) return;
  //   const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  //   audio.currentTime = 0;
  //   audio.play();
  //   key.classList.add('playing');
  // }

  // function removeTransition({ propertyName }) {
  //   if (propertyName !== 'transform') return;
  //   else this.classList.remove('playing');
  // }

  return (
    <div class="music-box__container">
      <div class="controls">
        <button class="auto-play guitar">AutoPlay Guitar</button>
      </div>

      <div class="guitar__keys">
        <div data-key="81" class="key">
          <kbd>Q</kbd>
          <span class="sound">C3</span>
        </div>
        <div data-key="87" class="key">
          <kbd>W</kbd>
          <span class="sound">Eb3</span>
        </div>
        <div data-key="69" class="key">
          <kbd>E</kbd>
          <span class="sound">G3</span>
        </div>
        <div data-key="82" class="key">
          <kbd>R</kbd>
          <span class="sound">C4</span>
        </div>
        <div data-key="84" class="key">
          <kbd>T</kbd>
          <span class="sound">Eb4</span>
        </div>
        <div data-key="89" class="key">
          <kbd>Y</kbd>
          <span class="sound">G4</span>
        </div>
        <div data-key="85" class="key">
          <kbd>U</kbd>
          <span class="sound">C5</span>
        </div>
        <div data-key="73" class="key">
          <kbd>I</kbd>
          <span class="sound">Eb5</span>
        </div>
        <div data-key="79" class="key">
          <kbd>O</kbd>
          <span class="sound">G5</span>
        </div>
      </div>

      <div class="controls">
        <button class="auto-play drums">AutoPlay Drums</button>
      </div>

      <div class="drum-kit__keys">
        <div data-key="83" class="key">
          <kbd>S</kbd>
          <span class="sound">hihat</span>
        </div>
        <div data-key="68" class="key">
          <kbd>D</kbd>
          <span class="sound">kick</span>
        </div>
        <div data-key="74" class="key">
          <kbd>J</kbd>
          <span class="sound">snare</span>
        </div>
        <div data-key="75" class="key">
          <kbd>K</kbd>
          <span class="sound">tom</span>
        </div>
      </div>
      <audio data-key="83" src="sounds/drums/hihat.wav"></audio>
      <audio data-key="68" src="sounds/drums/kick.wav"></audio>
      <audio data-key="74" src="sounds/drums/snare.wav"></audio>
      <audio data-key="75" src="sounds/drums/tom.wav"></audio>

      <audio data-key="81" src="sounds/guitar/c-min-penta/cg-1.wav"></audio>
      <audio data-key="87" src="sounds/guitar/c-min-penta/cg-2.wav"></audio>
      <audio data-key="69" src="sounds/guitar/c-min-penta/cg-3.wav"></audio>
      <audio data-key="82" src="sounds/guitar/c-min-penta/cg-4.wav"></audio>
      <audio data-key="84" src="sounds/guitar/c-min-penta/cg-5.wav"></audio>
      <audio data-key="89" src="sounds/guitar/c-min-penta/cg-6.wav"></audio>
      <audio data-key="85" src="sounds/guitar/c-min-penta/cg-7.wav"></audio>
      <audio data-key="73" src="sounds/guitar/c-min-penta/cg-8.wav"></audio>
      <audio data-key="79" src="sounds/guitar/c-min-penta/cg-9.wav"></audio>
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
};

export default MusicBox;
