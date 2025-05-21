// script.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Animações com IntersectionObserver
  const sections = document.querySelectorAll(".alt-bg");
  let delay = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
          const target = entry.target;
          setTimeout(() => {
            target.classList.add("visible");
          }, delay);
          delay += 300;
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));

  // 2. Contagem regressiva de 20 minutos
  const countdownEl = document.getElementById("countdown");
  const countdownTime = 20 * 60 * 1000; // 20 minutos em ms
  const deadline = new Date().getTime() + countdownTime;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance <= 0) {
      countdownEl.textContent = "00 Horas 00 Min 00 Seg";
      clearInterval(timer);
      return;
    }

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const hours = Math.floor((distance / (1000 * 60 * 60)));

    countdownEl.textContent = `${String(hours).padStart(2, "0")} Horas ${String(
      minutes
    ).padStart(2, "0")} Min ${String(seconds).padStart(2, "0")} Seg`;
  };

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
});
