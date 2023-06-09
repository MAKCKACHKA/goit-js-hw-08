import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var throttle = require('lodash.throttle');

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
// if (savedTime) {
player.setCurrentTime(savedTime);
// }
q