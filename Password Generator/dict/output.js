function generatePassword()
{
  let passLength = document.querySelector('.pass-length').innerText;
  console.log('hi');
  console.log(passLength);
}

//for generating password
document.querySelector('.generate').addEventListener('click', generatePassword());