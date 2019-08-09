'use strict';

var buttonCross = document.querySelectorAll('.button-cross');
var answer = document.querySelectorAll('.faq-list__answer');
var buttonTakePart = document.getElementById('participate');
var projects = document.querySelector('.projects');

buttonCross.forEach(function (btn) {
  btn.addEventListener('click', function () {

    if (answer.classList.contains('faq-list__answer--closed')) {
      answer.classList.remove('faq-list__answer--closed');
      answer.classList.add('faq-list__answer--opened');
    } else {
      answer.classList.add('faq-list__answer--closed');
      answer.classList.remove('faq-list__answer--opened');
    }
  });
});


function handleButtonClick() {
  projects.scrollIntoView({block: 'center', behavior: 'smooth'});
}

buttonTakePart.addEventListener('click', handleButtonClick);

