const texts = ["Web Developer", "Reverse Engineering", "Tech Enthusiast"];
const speed = 80;
let index = 0;
let charIndex = 0;
let isDeleting = false;
const target = document.getElementById("typing");

function typeEffect() {
  const current = texts[index];
  const updatedText = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  target.textContent = updatedText;

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.owner-info');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
});

typeEffect();