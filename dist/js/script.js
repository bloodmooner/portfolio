const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
});

closeElem.addEventListener('click', ()=> {
    menu.classList.remove('active');
});



const counters = document.querySelectorAll('.progress__percent'),
lines = document.querySelectorAll('.progress__bar .progress__bar-fill');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});