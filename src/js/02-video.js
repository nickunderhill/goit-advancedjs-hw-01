import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_STORAGE_VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(event) {
    localStorage.setItem(LOCAL_STORAGE_VIDEOPLAYER_CURRENT_TIME, event.seconds);
}, 1000));

const savedTime = localStorage.getItem(LOCAL_STORAGE_VIDEOPLAYER_CURRENT_TIME);
if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime)).catch(function(error) {
        console.error('Can not set current time:', error);
    });
}

