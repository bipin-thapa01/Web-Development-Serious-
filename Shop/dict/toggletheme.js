let toggle = document.querySelector('#switch-theme');
toggle.addEventListener('click',event = () =>{
  if(document.querySelector('#theme-text').innerText === 'Dark'){
    document.querySelector('#theme-text').innerText = 'Light';
    document.querySelector('#theme-circle').classList.remove('fa-solid',);
    document.querySelector('#theme-circle').classList.add('fa-regular');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.body.classList.remove('dark');
  }
  else{
    document.querySelector('#theme-text').innerText = 'Dark';
    document.querySelector('#theme-circle').classList.remove('fa-regular');
    document.querySelector('#theme-circle').classList.add('fa-solid');
    document.body.style.backgroundColor = '#292524';
    document.body.style.color = 'white';
    document.body.classList.add('dark');
  }
});