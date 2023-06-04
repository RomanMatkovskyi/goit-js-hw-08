import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    let curentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', curentTime);
  }, 1000)
);

if (localStorage.getItem(videoplayer - current - time)) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
