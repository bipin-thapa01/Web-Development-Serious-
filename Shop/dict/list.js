let manga = ['Berserk.jpg','blackclover.jpg','bleach.webp','bluelock.webp','dandadan.webp','demonslayer.webp ','jjk.jpg','katekyo.webp','naruto.jpg','onepiece.webp','sakamotodays.webp','tokyoghoul.webp'];
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

})