// Botão mobile
const btnMobile = document.getElementById("mobile_btn");

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

// Dúvidas
const faq = document.querySelectorAll(".faq_question button");

function activeFaq(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);

  response.classList.toggle("active");
  const active = response.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function faqEvent(faq) {
  faq.addEventListener("click", activeFaq);
}

faq.forEach(faqEvent);
