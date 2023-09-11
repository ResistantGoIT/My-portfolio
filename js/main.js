// toggle icon navbar
let menuIcon = document.querySelector('#header-menu__icon')
let navbar = document.querySelector('.header__nav')

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
}

// scroll-active-link-section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('header__nav-list-item-link--active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('header__nav-list-item-link--active');
         })
      }
   })
   // sticky navbar
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

   // remove toggle and navbar on click on navbar link (scroll)
   menuIcon.classList.remove('bx-x')
   navbar.classList.remove('active')
};


// --------------scroll reveal--------------
ScrollReveal({
   // reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.content-title, .main__home-content', { origin: 'top' });
ScrollReveal().reveal('.main__home-content-img, .services__container, .portfolio__container, .contact__form', { origin: 'bottom' });
ScrollReveal().reveal('.main__home-content-title, .about__image-img', { origin: 'left' });
ScrollReveal().reveal('.main__home-content-text, .about__content', { origin: 'right' });

// -------------- multiple text --------------
const typed = new Typed('.multiple-text', {
   strings: ['Junior Frontend Developer', 'Bettor', 'Good Man'],
   typeSpeed: 50,
   backSpeed: 50,
   backDelay: 1000,
   loop: true
})