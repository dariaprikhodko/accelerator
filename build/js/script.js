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
  var bodyElement = document.body;
  var htmlElement = document.querySelector('html');
  var faqTitles = document.querySelectorAll('.faq-list__wrapper');

  faqTitles.forEach(function (title, i) {
    title.addEventListener('click', function () {

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
        bodyElement.classList.add('left-padding');
        htmlElement.classList.add('stop-scroll');
      }
      var buttonClose = modalId.querySelector('.button-close');
      function byClose() {
        modalId.classList.add('visually-hidden');
        modalId.removeEventListener('click', byClose);
        bodyElement.classList.remove('left-padding');
        htmlElement.classList.remove('stop-scroll');
      }
      buttonClose.addEventListener('click', byClose);

      var buttonBack = modalId.querySelector('.button-back');
      buttonBack.addEventListener('click', byClose);

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

  thumbs[0].classList.add('thumb-active');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      thumbs.forEach(function (el) {
        el.classList.remove('thumb-active');
      });
      thumb.classList.add('thumb-active');
    });
  });

  var mySwiper = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    observer: true,
    observeParents: true
  });

  var thumbsContainer = document.querySelectorAll('.gallery-thumbs');
  mySwiper.forEach(function (el, i) {
    el.on('slideChange', function () {
      var thumbs = Array.from(thumbsContainer[i].children);
      thumbs.forEach(function (el) {
        el.classList.remove('thumb-active');
      });
      thumbs[el.realIndex].classList.add('thumb-active');
    });
  });
    thumbsContainer.forEach(function (el, i) {
      var thumbs = Array.from(el.children);
      thumbs.forEach(function (block, y) {
        block.addEventListener('click', function () {
          mySwiper[i].slideToLoop(y);
        });
      });
    });

})();
