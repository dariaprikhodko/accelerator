'use strict';

(function () {
  var buttonCross = document.querySelectorAll('.button-cross');
  var answer = document.querySelectorAll('.faq-list__answer');
  var buttonTakePart = document.getElementById('participate');
  var projects = document.querySelector('.projects__title');
  var buttonInfo = document.getElementById('moreInfo');
  var features = document.querySelector('.features');
  var buttonMonstroy = document.getElementById('montstroy');
  var montstroySlider = document.getElementById('montstroy-slider');
  var buttonSmart = document.getElementById('smart-device');
  var smartSlider = document.getElementById('smart-slider');
  var buttonBike = document.getElementById('bikeshop');
  var bikeSlider = document.getElementById('bike-slider');
  var buttonEscape = document.getElementById('escapeRoom');
  var escapeSlider = document.getElementById('escape-slider');

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

  buttonMonstroy.addEventListener('click', function () {

    if (montstroySlider.classList.contains('visually-hidden')) {
      montstroySlider.classList.remove('visually-hidden');
    }
  });

  buttonSmart.addEventListener('click', function () {

    if (smartSlider.classList.contains('visually-hidden')) {
      smartSlider.classList.remove('visually-hidden');
    }
  });

  buttonBike.addEventListener('click', function () {

    if (bikeSlider.classList.contains('visually-hidden')) {
      bikeSlider.classList.remove('visually-hidden');
    }
  });

  buttonEscape.addEventListener('click', function () {

    if (escapeSlider.classList.contains('visually-hidden')) {
      escapeSlider.classList.remove('visually-hidden');
    }
  });

})();

// var mySwiper = new Swiper('.gallery-top', {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// var thumbs = document.querySelectorAll('.gallery-thumbs__thumb');
// thumbs.forEach(function (el, i) {
//   el.addEventListener('click', function () {
//     mySwiper.slideTo(i, 500);
//   });
// });

// buttonCross.forEach(function (btn, i) {
//   btn.addEventListener('click', function () {
//     btn[i].classList.toggle('rotate');
//   });
// });
