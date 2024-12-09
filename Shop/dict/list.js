
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
