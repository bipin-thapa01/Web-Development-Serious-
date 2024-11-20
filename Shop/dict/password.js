let cnt = 0;
showHide = () =>{
  if(cnt%2==0){
    document.querySelector('#password').type = 'text';
    cnt++;
  }
  else{
    document.querySelector('#password').type = 'password';
    cnt++;
  }
}

document.querySelector('#show-hide').addEventListener('click',showHide);

let error = 0;
document.querySelector('#submit').addEventListener('click',event =>
{
  event.preventDefault();
  if(document.querySelector('#email').value === '' || document.querySelector('#password').value === ''){
    let div = document.createElement('div');
    div.innerText = "Error: Input Field(s) Empty";
    div.style.color = 'red';
    div.style.position = 'absolute';
    div.style.top = '270px';
    div.classList.add('error-message');
    document.querySelector('#form').appendChild(div);
    error = 1;
  }
  else{
    if(error===1){
      document.querySelector('#form').removeChild(document.querySelector('.error-message'));
      error = 0;
    }
    window.location.href = 'index.html';
  }
});