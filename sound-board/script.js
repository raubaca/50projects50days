const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

const stopSounds = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};
