let value = document.querySelector('.cards');
let count = 0;

value.addEventListener('click',event =>
{
  if(count%2==0)
  {
    console.log(count);
    value.classList.remove('cards-rotate-again');
    value.classList.add('cards-rotate');
    count++;
  }
  else
  {
    console.log(count);
    value.classList.remove('cards-rotate');
    value.classList.remove('cards-rotate-again');
    count++;
  }
});