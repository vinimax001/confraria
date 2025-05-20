// script.js
const countdownElement = document.getElementById("countdown");
const targetTime = new Date();
targetTime.setMinutes(targetTime.getMinutes() + 15);

function updateCountdown() {
  const now = new Date();
  const diff = targetTime - now;

  if (diff <= 0) {
    countdownElement.textContent = "00 Horas 00 Min 00 Seg";
    return;
  }

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

  countdownElement.textContent = `${hours} Horas ${minutes} Min ${seconds} Seg`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Correção do erro de digitação e ajuste na lógica de animação das sections
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".alt-bg");
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      section.classList.add("visible");
    }
  });
});
