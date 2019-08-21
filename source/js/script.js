'use strict';

(function () {
  var buttonCross = document.querySelectorAll('.button-cross');
  var answer = document.querySelectorAll('.faq-list__answer');
  var buttonTakePart = document.getElementById('participate');
  var projects = document.querySelector('.projects__title');
  var buttonInfo = document.getElementById('moreInfo');
  var features = document.querySelector('.features');
  var buttonsModal = document.querySelectorAll('.js-call-modal');
  var slider = document.querySelectorAll('.slider-wrapper');
  var buttonClose = document.querySelector('.button-close');
  var buttonBack = document.querySelector('.button-back');

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

  // slider show
  buttonsModal.forEach(function (el) {
    el.addEventListener('click', function () {
      var modalEach = el.getAttribute('data-modal');
      var modalId = document.getElementById(modalEach);
      if (modalId.classList.contains('visually-hidden')) {
        modalId.classList.remove('visually-hidden');
      }
    });
  });

  // button-cross transition
  buttonCross.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('rotate');
    });
  });

  buttonClose.addEventListener('click', function () {
    slider.remove();
    document.removeEventListener('keydown', onPopupEscapePress);
  });
  document.addEventListener('keydown', onPopupEscapePress);

  buttonBack.addEventListener('click', function () {
    slider.remove();
    document.removeEventListener('keydown', onPopupEscapePress);
  });
  document.addEventListener('keydown', onPopupEscapePress);

  var onPopupEscapePress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      slider.remove();
      document.removeEventListener('keydown', onPopupEscapePress);
    }
  };
})();
