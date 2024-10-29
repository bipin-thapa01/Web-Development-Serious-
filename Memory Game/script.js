// const { start } = require("@popperjs/core");

// let value = document.querySelector('.cards');
// let count = 0;

// value.addEventListener('click', event => {
//   if (count % 2 == 0) {
//     console.log(count);
//     value.classList.remove('cards-rotate-again');
//     value.classList.add('cards-rotate');
//     count++;
//   }
//   else {
//     console.log(count);
//     value.classList.remove('cards-rotate');
//     value.classList.remove('cards-rotate-again');
//     count++;
//   }
// });

let playStatus = 'no';

function startGameTimer(second = 0, minute = 0, hour = 0, checkLoop = 0) {
  if (checkLoop === 1) {
    playStatus = 'no';
  }
  if (playStatus === 'yes') {
    console.log('Hi');
    alert(`The game is paused. Press ok to play again!`);
    return;
  }
  playStatus = 'yes';
  document.querySelector('.play-pause').innerText = 'Pause';
  document.querySelector('.timer').innerText = '';
  if (second < 10) {
    second = `0${second}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  document.querySelector('.timer').innerText = `${hour} : ${minute} : ${second}`;
  second = parseInt(second);
  minute = parseInt(minute);
  hour = parseInt(hour);
  setTimeout(() => {
    second++;
    if (second > 59) {
      second -= 60;
      minute++;
    }
    if (minute > 59) {
      minute -= 60;
      hour++;
    }
    if (hour > 3) {
      return;
    }
    startGameTimer(second, minute, hour, 1);
  }, 1000);
}


document.querySelector('.back').addEventListener('click', event => {
  window.location.href = 'index.html';
});