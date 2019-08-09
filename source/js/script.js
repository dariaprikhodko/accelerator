'use strict';

var buttonCross = document.querySelectorAll('.button-cross');
var answer = document.querySelectorAll('.faq-list__answer');
var buttonTakePart = document.getElementById('participate');
var projects = document.querySelector('.projects');
var buttonInfo = document.getElementById('moreInfo');
var features = document.querySelector('.features');


buttonCross.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var i = 0;

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
  projects.scrollIntoView({block: 'center', behavior: 'smooth'});
}
buttonTakePart.addEventListener('click', handleGoToProjects);

function handleGoToFeatures() {
  features.scrollIntoView({block: 'center', behavior: 'smooth'});
}
buttonInfo.addEventListener('click', handleGoToFeatures);
