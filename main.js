const goUp = document.querySelector('#go_up');
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a');
const heroBanner = document.querySelector('.hero-banner');

window.onscroll = function () {
  if (heroBanner !== null) {
    scrollFunction();
  }
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
  console.log('Button Menu is clicked');
  // for (let i = 0; i < links.length; i++) {
  //   links[i].addEventListener('click', openMenu);
  // }
  links.forEach((link) => link.addEventListener('click', openMenu));
  //Check if responsive class exists. If it does remove it, if it doesn't add it
  //It doesn't work because Menu button is inside the responsive class
  //Menu opens in mobile automatically because responsive is display:block
  //If you make it none then Menu button disappears too

  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
  } else {
    nav.classList.add('responsive');
  }
};

openMenu();
menu.addEventListener('click', openMenu);
goUp.addEventListener('click', getToTop);
