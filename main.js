const header = document.querySelector('.header');
const goUp = document.querySelector('#go_up');
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a');
const heroBanner = document.querySelector('.hero-banner');

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  //the second part after || is for older browsers
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    goUp.style.display = 'block';
    heroBanner.classList.add('overlay-selector');
  } else {
    goUp.style.display = 'none';
    heroBanner.classList.remove('overlay-selector');
  }
};
//Function for going to top
const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Toggle between nav for mobile and web
const openMenu = () => {
  for (let i = 0; i < links.lingth; i++) {
    console.log(`Link ${links[i]} got assigned event listener.`);
    links[i].addEventListener('click', openMenu);
  }
  //Check if responsive class exists. If it does remove it, if it doesn't add it
  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
  } else {
    nav.classList.add('responsive');
  }
};

menu.addEventListener('click', openMenu);
goUp.addEventListener('click', getToTop);
