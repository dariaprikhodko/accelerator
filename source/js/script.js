'use strict';

(function () {
  var buttonCross = document.querySelectorAll('.button-cross');
  var thumbs = document.querySelectorAll('.gallery-thumbs__thumb');
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
        this.removeEventListener('click', byClose);
      }
      buttonClose.addEventListener('click', byClose);

      var buttonBack = modalId.querySelector('.button-back');
      buttonBack.addEventListener('click', byClose);
      // buttonBack.removeEventListener('click', byClose);

      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
          byClose()
        }
      });
    });
  });

  // button-cross transition
  buttonCross.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('rotate');
    });
  });

  var swiper = document.querySelector('.swiper-container');
  swiper.onclick = function (e) {
    for (var i = 0; i < swiper.children.length; i++) {
      swiper.children[i].classList.remove('thumb-active');
    }
    e.target.classList.add('thumb-active');
  };

  // thumbs.forEach(function (thumb) {
  //   thumb.addEventListener('click', function () {
  //     thumb.classList.toggle('thumb-active');
  //   });
  //   for (var i = 0; i > thumbs.length; i++) {
  //     if (thumb[i].classList.contains('thumb-active')) {
  //       thumb[i].classList.remove('thumb-active');
  //     }
  //   }
  // });
})();
