let manga = ['./websrc/Items/Berserk.jpg','./websrc/Items/blackclover.jpg','./websrc/Items/bleach.webp','./websrc/Items/bluelock.webp','./websrc/Items/dandadan.webp','./websrc/Items/demonslayer.webp ','./websrc/Items/jjk.jpg','./websrc/Items/katekyo.webp','./websrc/Items/naruto.jpg','./websrc/Items/onepiece.webp','./websrc/Items/sakamotodays.webp','./websrc/Items/tokyoghoul.webp'];
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
  img.src = i;
  img.classList.add('image');
  img.style.width = '300px';
  img.style.height = '425px';
  div.appendChild(img);
  div.classList.add('list-custom')
  document.querySelector('#cat1-content').appendChild(div);
})