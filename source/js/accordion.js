let accordion = document.querySelectorAll('.accordion');
let footerNav = document.querySelector('.footer__navigation');
// let mobileWidthMediaQuery = window.matchMedia('(max-widht: 768px');



accordion.forEach((el) => {

  if (window.screen.width <= 768) {
    footerNav.classList.add('accordion--close');
    el.nextElementSibling.classList.add('nav--close');
  } else {
    footerNav.classList.remove('accordion--close');
    el.nextElementSibling.classList.remove('nav--close');
  }

  el.addEventListener('click', () => {
    if (footerNav.classList.contains('accordion--close')) {
      el.nextElementSibling.classList.toggle('nav--close');
      el.classList.toggle('accordion-is-open');
    }
  });
});

(function () {

  matchMedia('only screen and (min-width:768px)').addEventListener('change', () => {

    if (footerNav.classList.contains('accordion--close')) {
      footerNav.classList.remove('accordion--close');
    } else {
      footerNav.classList.add('accordion--close');
    }

    accordion.forEach((el) => {

      if (footerNav.classList.contains('accordion--close')) {
        el.nextElementSibling.classList.add('nav--close');
      } else {
        el.nextElementSibling.classList.remove('nav--close');
      }
    });
  });
})();

