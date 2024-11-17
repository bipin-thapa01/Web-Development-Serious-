let toggle = document.querySelector('#switch-theme');
toggle.addEventListener('click',event = () =>{
  if(document.querySelector('#theme-text').innerText === 'Dark'){
    document.querySelector('#theme-text').innerText = 'Light';
    document.querySelector('#theme-circle').classList.remove('fa-solid',);
    document.querySelector('#theme-circle').classList.add('fa-regular');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelector('#nav').style.borderColor = 'black';
    document.querySelector('#nav1').style.borderColor = 'black';
  }
  else{
    document.querySelector('#theme-text').innerText = 'Dark';
    document.querySelector('#theme-circle').classList.remove('fa-regular');
    document.querySelector('#theme-circle').classList.add('fa-solid');
  }
});