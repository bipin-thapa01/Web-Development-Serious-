let mainTheme = {};
mainTheme = JSON.parse(localStorage.getItem('theme'));
if(mainTheme === null){
  mainTheme = {
    theme : ''
  };
}
if(mainTheme.theme === 'Dark'){
  document.querySelector('#theme-text').innerText = 'Dark';
  document.querySelector('#theme-circle').classList.remove('fa-regular');
  document.querySelector('#theme-circle').classList.add('fa-solid');
  document.body.style.backgroundColor = '#292524';
  document.body.style.color = 'white';
  document.body.classList.add('dark');
}
else if(mainTheme.theme === 'Light'){
  document.querySelector('#theme-text').innerText = 'Light';
  document.querySelector('#theme-circle').classList.remove('fa-solid',);
  document.querySelector('#theme-circle').classList.add('fa-regular');
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  document.body.classList.remove('dark')
}

let s = () =>{
  if(document.querySelector('#theme-text').innerText === 'Dark'){
    document.querySelector('#theme-text').innerText = 'Light';
    document.querySelector('#theme-circle').classList.remove('fa-solid',);
    document.querySelector('#theme-circle').classList.add('fa-regular');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.body.classList.remove('dark');
    mainTheme.theme = 'Light';
    localStorage.setItem('theme',JSON.stringify(mainTheme));
  }
  else{
    document.querySelector('#theme-text').innerText = 'Dark';
    document.querySelector('#theme-circle').classList.remove('fa-regular');
    document.querySelector('#theme-circle').classList.add('fa-solid');
    document.body.style.backgroundColor = '#292524';
    document.body.style.color = 'white';
    document.body.classList.add('dark');
    mainTheme.theme = 'Dark';
    localStorage.setItem('theme',JSON.stringify(mainTheme));
  }
};
let toggle1 = document.querySelector('#switch-theme1');
let toggle2 = document.querySelector('#switch-theme2');
toggle1.addEventListener('click',s);
toggle2.addEventListener('click',s);