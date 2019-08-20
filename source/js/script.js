'use strict';

(function () {
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

})();


// buttonCross.forEach(function (btn, i) {
//   btn.addEventListener('click', function () {
//     btn[i].classList.toggle('rotate');
//   });
// });
