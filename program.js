/* ============================================
   EARTHON — js/program.js
   카테고리 탭 필터 + 추천 미션 Swiper
============================================ */

/* 카테고리 탭 필터 */
const tabBtns = document.querySelectorAll('.tab-btn');
const cards   = document.querySelectorAll('.prog-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    /* 활성 탭 교체 */
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    /* 카드 표시/숨김 */
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

/* 이달의 추천 미션 Swiper */
new Swiper('.hlSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  navigation: {
    prevEl: '#hlPrev',
    nextEl: '#hlNext'
  },
  breakpoints: {
    640:  { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
