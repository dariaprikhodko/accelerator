'use strict';
import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

var buttonCross = document.querySelectorAll('.button-cross');
var answer = document.querySelectorAll('.faq-list__answer');
var buttonTakePart = document.getElementById('participate');
var projects = document.querySelector('.projects__title');
var buttonInfo = document.getElementById('moreInfo');
var features = document.querySelector('.features');


buttonCross.forEach(function (btn, i) {
  btn.addEventListener('click', function () {

    if (answer[i].classList.contains('faq-list__answer--closed')) {
      answer[i].classList.remove('faq-list__answer--closed');
      answer[i].classList.add('faq-list__answer--opened');
    } else {
      answer[i].classList.add('faq-list__answer--closed');
      answer[i].classList.remove('faq-list__answer--opened');
    }
  });
});


function handleGoToProjects() {
  projects.scrollIntoView({block: 'start', behavior: 'smooth'});
}
buttonTakePart.addEventListener('click', handleGoToProjects);

function handleGoToFeatures() {
  features.scrollIntoView({block: 'start', behavior: 'smooth'});
}
buttonInfo.addEventListener('click', handleGoToFeatures);

const slider = tns({
    container: '.slider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,    
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#customize-controls",
  });
