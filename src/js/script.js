const btnMobile = document.getElementById("mobile_btn");

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
