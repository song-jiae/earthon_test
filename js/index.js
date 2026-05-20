/* ============================================
   EARTHON — js/index.js
   카운터 애니메이션 + 후기 Swiper
============================================ */

/* 숫자 카운터 애니메이션 (IntersectionObserver) */
const counters = document.querySelectorAll('.c-num[data-target]');
const countObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el     = entry.target;
    const target = parseInt(el.dataset.target);
    const unit   = el.querySelector('.c-unit');
    let   cur    = 0;
    const step   = target / 80;

    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.innerHTML = Math.floor(cur).toLocaleString() + (unit ? unit.outerHTML : '');
      if (cur >= target) clearInterval(timer);
    }, 20);

    countObs.unobserve(el);
  });
}, { threshold: 0.4 });

counters.forEach(c => countObs.observe(c));

/* 후기 Swiper */
new Swiper('.testimonialSwiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '#tPrev',
    nextEl: '#tNext'
  },
  breakpoints: {
    640:  { slidesPerView: 2, spaceBetween: 32 },
    1024: { slidesPerView: 3, spaceBetween: 48 }
  }
});
