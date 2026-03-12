const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const feedbackForms = document.querySelectorAll('.feedback-form');
for (const feedbackForm of feedbackForms) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const [nameInput, phoneInput, messageInput] = feedbackForm.querySelectorAll('input, textarea');
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();
    const text = [
      'Здравствуйте, интересует ремонт кровли.',
      name ? `Имя: ${name}` : '',
      phone ? `Телефон: ${phone}` : '',
      message ? `Сообщение: ${message}` : ''
    ].filter(Boolean).join('\n');

    window.location.href = `https://wa.me/79829020802?text=${encodeURIComponent(text)}`;
  });
}
