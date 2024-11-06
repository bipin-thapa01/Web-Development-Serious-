let second = 0;
let minute = 0;
let hour = 0;
let cardsCount = document.querySelector('.game-section').childElementCount;
let imageUse = [
  'Resources/luffy.jpg', 'Resources/luffy.jpg', 'Resources/zoro.jpg',
  'Resources/zoro.jpg', 'Resources/sanji.jpg', 'Resources/sanji.jpg',
  'Resources/robin.jpg', 'Resources/robin.jpg'
];
shuffleImage();

//for creating an array wth 'n' size and containing object as its element
let cardDetails = Array.from({ length: cardsCount }, (_, index) => ({
  id: index,
  name: imageUse[index]
}));
console.log(imageUse);
console.log(cardDetails);

//for putting random image in card2
for (let i = cardsCount; i > 0; i--) {
  let img = document.createElement('img');
  img.src = imageUse.pop();
  document.querySelector(`.card${i}2`).appendChild(img);
}

//for shuffle of image
function shuffleImage() {
  for (let i = cardsCount - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = imageUse[i];
    imageUse[i] = imageUse[j];
    imageUse[j] = temp;
  }
}

let count = [];
let correctCount = 0;
let clickCount = 0;
let allCardChoosenList = [];

//for adding an event to make card clickable and also to compare to cards
for (let i = 1; i <= cardsCount; i++) {
  count.push(0);
  let value = document.querySelector(`.card-holder${i}`);
  value.addEventListener(`click`, event => {
    if (document.querySelector('.play-pause').innerText === 'Pause') {
      value.classList.add('cards-rotate');
      allCardChoosenList.push(value);
      clickCount++;
      console.log(clickCount);
      if (clickCount % 2 == 0) {
        document.querySelector('.try').innerText = `Try: ${clickCount / 2}`;
        let check1 = allCardChoosenList.pop();
        check1 = check1.classList[1].substr(-1);
        let check2 = allCardChoosenList.pop();
        check2 = check2.classList[1].substr(-1);
        if (cardDetails[check2 - 1].name !== cardDetails[check1 - 1].name) {
          setTimeout(() => {
            document.querySelector(`.card-holder${check2}`).classList.remove(`cards-rotate`);
            document.querySelector(`.card-holder${check1}`).classList.remove(`cards-rotate`);
          }, 1500);
        }
        else {
          setTimeout(() => {
            document.querySelector(`.card-holder${check2}`).style.display = 'none';
            document.querySelector(`.card-holder${check1}`).style.display = 'none';
          }, 1500);
          correctCount++;
          document.querySelector('.correct').innerText = `Correct: ${correctCount}`;
          if (correctCount === 4) {
            setTimeout(() => {
              document.querySelector('.nav').style.filter = 'blur(10px)';
              document.querySelector('.info-container').style.filter = 'blur(10px)';
              document.querySelector('.game-section-container').style.filter = 'blur(10px)';
              document.querySelector('.game-score').style.filter = 'blur(10px)';
              document.querySelector('.game-completed').style.display = 'flex';
              document.querySelector('.data').innerText += clickCount / 2;
              document.querySelector('.time-data').innerText += ` ${hour} : ${minute} : ${second}`;
              if(clickCount/2 <= 5)
              {
                document.querySelector('.score').innerText += 'Excellent';
              }  
              else if(clickCount/2 <= 8)
              {
                document.querySelector('.score').innerText += 'Good';
              }  
              else if(clickCount/2 <= 10)
              {
                document.querySelector('.score').innerText += 'Mid';
              }
              else if(clickCount/2 > 10)
              {
                document.querySelector('.score').innerText += 'You Dumb?';
              }           
            }, 2000);
          }
        }
      }
    }
    count[i - 1]++;
  });
}


//for counting the time for which the game is played
let playStatus = 'no';
function startGameTimer(checkLoop = 0) {
  if (checkLoop === 1) {
    playStatus = 'no';
  }
  if (playStatus === 'yes') {
    alert(`The game is paused. Press ok to resume!`);
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
    startGameTimer(1);
  }, 1000);
}

//for going to homepage
document.querySelector('.back').addEventListener('click', event => {
  window.location.href = 'index.html';
});

//for new game
document.querySelector('.new-game').addEventListener('click',
  event => {
    document.querySelector('.nav').style.filter = 'blur(10px)';
    document.querySelector('.info-container').style.filter = 'blur(10px)';
    document.querySelector('.game-section-container').style.filter = 'blur(10px)';
    document.querySelector('.game-score').style.filter = 'blur(10px)';
    document.querySelector('.new-game-choice').style.display = 'flex';
  });

//new game easy level
document.querySelector('.choice1').addEventListener('click',
  event => {
    window.location.href = 'easy_mode.html';
  });

//new game medium level
document.querySelector('.choice2').addEventListener('click',
  event => {
    window.location.href = 'medium_mode.html';
  });

document.querySelector('.choice3').addEventListener('click',
  event => {
    window.location.href = 'hard_mode.html';
  });

document.querySelector('.choice4').addEventListener('click',
  event => {
    document.querySelector('.nav').style.filter = 'blur(0px)';
    document.querySelector('.info-container').style.filter = 'blur(0px)';
    document.querySelector('.game-section-container').style.filter = 'blur(0px)';
    document.querySelector('.game-score').style.filter = 'blur(0px)';
    document.querySelector('.new-game-choice').style.display = 'none';
  });

document.querySelector('.game-complete-choice1').addEventListener('click', event => {
  window.location.href = 'easy_mode.html';
})

document.querySelector('.game-complete-choice2').addEventListener('click', event => {
  window.location.href = 'index.html';
})