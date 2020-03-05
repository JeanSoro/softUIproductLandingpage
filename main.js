let menuToggler = document.querySelector('.menu-toggler');
let navList = document.querySelector('.nav-list');

menuToggler.addEventListener('click', () => {
  navList.classList.toggle('active');
});