//for changing theme of website
let theme = document.querySelector('.change-color');
let changeThemeCount = 0;
let changeTheme = () =>{
  if(changeThemeCount%2===0){
    theme.classList.remove('fa-regular','fa-sun');
    theme.classList.add('fa-solid','fa-sun');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
  else{
    theme.classList.remove('fa-solid','fa-sun');
    theme.classList.add('fa-regular','fa-sun');
    document.body.style.backgroundColor = '#292524';
    document.body.style.color = 'white';
  }
  changeThemeCount++;
}
theme.addEventListener('click',changeTheme);