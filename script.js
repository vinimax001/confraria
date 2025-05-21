document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.alt-bg');
  let delay = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
        const target = entry.target;
        setTimeout(() => {
          target.classList.add('visible');
        }, delay);
        delay += 400; // Atraso progressivo para animar uma por uma
        observer.unobserve(target); // Evita reanimação ao rolar de volta
      }
    });
  }, {
    threshold: 0.15 // Ajuste conforme o momento desejado da entrada
  });

  sections.forEach(section => observer.observe(section));
});
