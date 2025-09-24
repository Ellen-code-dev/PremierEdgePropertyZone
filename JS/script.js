// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Scroll Fade-in Animation
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.about-image img, .about-content, .core-values .value');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
// Fade-in scroll animation for About and Team sections
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll(
    '.about-image img, .about-content, .core-values .value, .team-members .member'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
// Fade-in on scroll
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll(
    '.contact-form, .contact-info'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

// Simple form submission alert (demo)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  contactForm.reset();
});
// Fade-in properties on scroll
document.addEventListener('DOMContentLoaded', function () {
  const propertyCards = document.querySelectorAll('.property-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  propertyCards.forEach(card => observer.observe(card));
});
