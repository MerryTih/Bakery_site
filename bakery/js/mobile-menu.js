const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtnOpen = document.querySelector('.menu-btn-open');
const mobileMenuBtnClose = document.querySelectorAll('.menu-btn-close');

const toggleMobileMenu = () => mobileMenu.classList.toggle('is-open');

mobileMenuBtnOpen.addEventListener('click', toggleMobileMenu);
mobileMenuBtnClose.forEach(btn => btn.addEventListener('click', toggleMobileMenu));