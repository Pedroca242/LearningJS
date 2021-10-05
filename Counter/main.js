let number = document.getElementById('numero');

let zero = document.getElementById('zero');
let buttonUp = document.getElementById('up');
let buttonDown = document.getElementById('down');

let n = 0;

buttonUp.addEventListener('click', function(){
  n += 1;
  number.innerHTML = n;
})

buttonDown.addEventListener('click', function(){
  n -= 1;
  number.innerHTML = n;
})

zero.addEventListener('click', function(){
  n = 0;
  number.innerHTML = n;
})
