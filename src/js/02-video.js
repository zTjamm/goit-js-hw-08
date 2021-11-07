const throttle = require('lodash.throttle');
const TIME_DATA = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let saveTime = 0;
populateTime();
player.setCurrentTime(saveTime);
player.on('timeupdate', throttle(timeCurrenter, 1000));
function timeCurrenter(el) {
  localStorage.setItem(TIME_DATA, el.seconds);
  saveTime = el.seconds;
}
function populateTime() {
  if (localStorage.getItem(TIME_DATA)) {
    saveTime = localStorage.getItem(TIME_DATA);
  }
}