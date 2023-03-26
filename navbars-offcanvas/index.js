const buttonScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('.col-md-5');

buttonScrollTo.addEventListener('click', function (e) {
      section1.scrollIntoView({ behavior: 'smooth' });
});

