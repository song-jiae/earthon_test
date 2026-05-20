/* ============================================
   EARTHON — js/main.js
   공유 스크립트: AOS, 네비게이션, 햄버거 메뉴
============================================ */

/* AOS 초기화 */
AOS.init({ duration: 700, once: true, offset: 60 });

/* 네비게이션 스크롤 효과 */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* 햄버거 메뉴 토글 */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    /* 메뉴 열릴 때 뒷 페이지 스크롤 잠금 */
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}
