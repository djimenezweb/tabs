// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
/* import CatImage from '../assets/images/anubis.jpg';
import { sayHello } from './demo.js';

sayHello();

const img = document.createElement('img');
img.src = CatImage;
document.body.append(img); */

const tabTextElement = document.getElementById('tab-text');
const tabHeadElement = document.getElementById('tab-head');
const tabTitles = [...document.querySelectorAll('.tab__title')];
const tabTexts = [...document.querySelectorAll('.tab__body')];
const rootStyles = document.documentElement.style;

const updateActive = e => {
  document.querySelector('.tab__title--active').classList.remove('tab__title--active');
  e.target.classList.add('tab__title--active');
};

tabHeadElement.addEventListener('click', e => {
  if (e.target.classList.contains('tab__title')) {
    updateActive(e);
    rootStyles.setProperty('--title-position', `${e.target.offsetLeft}px`);
    rootStyles.setProperty('--title-scale', `${e.target.clientWidth / 80}`);
    document.querySelector('.show').classList.remove('show');
    tabTexts[tabTitles.indexOf(e.target)].classList.add('show');
  }
});
