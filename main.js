// Abre e fecha o menu quando clicar no ícone hamburguer

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// quando clicar em um item do menubar, esconder o menu

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

// Mudar o header da página quando der scroll

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll');
}

// Botão voltar para o topo

const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
  window.scrollY >= 1300
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show');
}

// Testimonials carousel with slider

const swiper = new Swiper('.swiper-container', {
  sliderPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Scroll Reveal: Mostrar os elementos quando der o scroll na página

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 700,
  reset: false,
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .Testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  {
    interval: 100,
  }
);

// Menu ativo conforme a seção visível na página

const sections = document.querySelectorAll('main section[id]');

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    checkpointStart && checkpointEnd
      ? document
          .querySelector(`nav ul li a[href*=${sectionId}]`)
          .classList.add('active')
      : document
          .querySelector(`nav ul li a[href*=${sectionId}]`)
          .classList.remove('active');
  }
}

// Change the site color when scroll

// function changeColorsWhenScroll() {
//   let randomColor = Math.floor(Math.random() * 360) + 1;
//   document.documentElement.style.setProperty('--hue', `${randomColor}`);
// }

// When Scroll

window.addEventListener('scroll', () => {
  changeColorsWhenScroll();
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

// Ativa o Dark Mode Desktop e Mobile

const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});

const btnMobile = document.querySelector('.btn-toggle-mobile');

btnMobile.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});

//Expande os Cards

const text = document.querySelectorAll('.focus-content');
const card = document.querySelectorAll('.card');

card.forEach((card, index) => {
  card.addEventListener('click', () => {
    if (text[index].classList.contains('show-text')) {
      text[index].classList.remove('show-text');
    } else {
      text[index].classList.add('show-text');
    }
  });
});

// const moovingBlob = KUTE.fromTo(
//   '#blob1',
//   { path: '#blob1' },
//   { path: '#blob2' },
//   { repeat: 999, duration: 3000, yoyo: true }
// );

// moovingBlob.start();