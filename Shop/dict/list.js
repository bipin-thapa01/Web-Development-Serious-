let leftContainer = document.createElement('div');
leftContainer.classList.add('left','dark:bg-gray-950','bg-gray-500','hover:bg-gray-950','dark:hover:bg-gray-500','hover:text-white');
let left = document.createElement('i');
left.classList.add('fa-solid','fa-chevron-left','left-arrow');
document.querySelector('.button-container').appendChild(leftContainer);
document.querySelector('.left').appendChild(left);

let rightContainer = document.createElement('div');
rightContainer.classList.add('right','dark:bg-gray-950','bg-gray-500','hover:bg-gray-950','dark:hover:bg-gray-500','hover:text-white');
let right = document.createElement('i');
right.classList.add('fa-solid','fa-chevron-right');
document.querySelector('.button-container').appendChild(rightContainer);
document.querySelector('.right').appendChild(right);

let manga = ['berserk','blackclover','bleach','bluelock','dandadan','demonslayer','jjk','katekyo','naruto','onepiece','sakamotodays','tokyoghoul'];

function random(a){
  let len = a.length;
  let temp = [];
  while(len!=0){
    temp.push(a.splice(Math.floor(Math.random()*len),1));
    len = a.length;
  }
  return temp;
}

manga = random(manga);
console.log(manga);

manga.forEach((i,index) =>
{
  let div = document.createElement('div');
  let img = document.createElement('img');
  img.src = `./websrc/Items/${i}.jpg`;
  img.classList.add('image');
  div.appendChild(img);
  div.classList.add('list-custom');
  div.style.overflow = 'hidden';
  document.querySelector('#cat1-content').appendChild(div);
})