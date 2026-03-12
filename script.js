const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
  });
}

const feedbackForms = document.querySelectorAll(".feedback-form");

for (const feedbackForm of feedbackForms) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = feedbackForm.querySelector('input[name="name"]');
    const phoneInput = feedbackForm.querySelector('input[name="phone"]');
    const messageInput = feedbackForm.querySelector('textarea[name="message"]');

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    const text = [
      "Здравствуйте. Интересуют строительные работы.",
      name ? `Имя: ${name}` : "",
      phone ? `Телефон: ${phone}` : "",
      message ? `Задача: ${message}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `https://wa.me/79829020802?text=${encodeURIComponent(text)}`;
  });
}
