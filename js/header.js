const menuBtn = document.querySelector('.menu-bar');
const menucloseBtn = document.querySelector('.mobile-nav .close-btn');
const mobileNav = document.querySelector('.mobile-nav');

const mobileMenuItems = document.querySelectorAll('.mobile-nav ul li a'); 

menuBtn.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

menucloseBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('active'); 
  });
});