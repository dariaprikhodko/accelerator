'use strict';

(function () {
  var buttonCross = document.querySelectorAll('.button-cross');
  var answer = document.querySelectorAll('.faq-list__answer');
  var buttonTakePart = document.getElementById('participate');
  var projects = document.querySelector('.projects__title');
  var buttonInfo = document.getElementById('moreInfo');
  var features = document.querySelector('.features');
  var buttonsModal = document.querySelectorAll('.js-call-modal');

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
      var buttonClose = modalId.querySelector('.button-close');
      function byClose() {
        modalId.classList.add('visually-hidden');
      }
      buttonClose.addEventListener('click', byClose);
      buttonClose.removeEventListener('click', byClose);

      var buttonBack = modalId.querySelector('.button-back');
      buttonBack.addEventListener('click', byClose);
      buttonBack.removeEventListener('click', byClose);

      if (event.keyCode === 27) {
        document.addEventListener('keydown', byClose);
      }
    });
  });

  // button-cross transition
  buttonCross.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('rotate');
    });
  });


  // buttonClose.addEventListener('click', function () {
  //   slider.remove();
  //   document.removeEventListener('keydown', onPopupEscapePress);
  // });
  // document.addEventListener('keydown', onPopupEscapePress);

  // buttonBack.addEventListener('click', function () {
  //   slider.remove();
  //   document.removeEventListener('keydown', onPopupEscapePress);
  // });
})();
