generatePassword = () =>
{
  let passLength = document.querySelector('.pass-length').value;
  for(let i = 0; i<passLength; i++)
  {
    let charChoice = Math.ceil(Math.random() * 3);
    if(charChoice == 1)
    {
      
    }
  }
}

//for generating password
document.querySelector('#generate').addEventListener('click', generatePassword);