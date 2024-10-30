function scrollToSection(sectionID) {
  const section = document.getElementById(sectionID);
  section.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelector(".nav-links");
  const toggleMenu = document.querySelector(".menu-toggle");
  const fadeInUpElements = document.querySelectorAll('.about, .services, .projects, .contact');

  toggleMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  window.addEventListener('scroll', () => {
    fadeInUpElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });

  // Animate header on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(245, 245, 245, 0.95)';
    } else {
      header.style.backgroundColor = 'rgba(245, 245, 245, 0.9)';
    }
  });
});
