/* ============================================
   EARTHON — js/contact.js
   FAQ 아코디언 + 신청 폼 제출
============================================ */

/* FAQ 아코디언 */
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    /* 다른 항목 모두 닫기 */
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    /* 클릭한 항목 토글 */
    if (!isOpen) item.classList.add('open');
  });
});

/* 신청 폼 제출 (데모) */
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const agree = document.getElementById('agreeCheck');

    if (!agree.checked) {
      const agreeLabel = agree.closest('.form-group').querySelector('.form-agree');
      agreeLabel.style.color = '#c05c28';
      setTimeout(() => { agreeLabel.style.color = ''; }, 2000);
      return;
    }

    document.getElementById('contactForm').style.display  = 'none';
    document.getElementById('formSuccess').style.display  = 'block';
  });
}
