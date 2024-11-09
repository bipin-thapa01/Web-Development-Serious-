let pass = '';
let num = [1,2,3,4,5,6,7,8,9,0];

generatePassword = () =>
{
  pass = '';
  let passLength = document.querySelector('.pass-length').value;
  for(let i = 0; i<passLength; i++)
  {
    let charChoice = Math.ceil(Math.random() * 3);
    let passChoice = Math.ceil(Math.random() *26);
    if(charChoice === 1)
    {
      passChoice = String.fromCharCode(90-passChoice);
      pass += passChoice;
    }
    else if(charChoice === 2)
    {
      passChoice = String.fromCharCode(122-passChoice);
      pass += passChoice;
    }
    else if(charChoice === 3)
    {
      passChoice = num[Math.floor(Math.random() * 9)];
      pass += passChoice;
    }
  }
  console.log(pass);
  document.querySelector('#password').value = pass;
}

//for generating password
document.querySelector('#generate').addEventListener('click', generatePassword)

const inputField = document.getElementById("password");
const copyButton = document.getElementById("clipboard");
copyButton.addEventListener("click", () => {
    inputField.select();
    inputField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputField.value).then(() => {
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

let clickCount = 0;
let toggle = document.querySelector('#password');
showHide = () =>
{
  if(clickCount%2===0)
  {
    document.querySelector('.show-hide').classList.remove('fa-solid','fa-eye-slash');
    document.querySelector('.show-hide').classList.add('fa-regular','fa-eye-slash');
    toggle.type = 'text';
  }
  else
  {
    document.querySelector('.show-hide').classList.remove('fa-regular','fa-eye-slash');
    document.querySelector('.show-hide').classList.add('fa-solid','fa-eye-slash');
    toggle.type = 'password';
  }
  clickCount++;
}

document.querySelector('.show-hide').addEventListener('click', showHide);