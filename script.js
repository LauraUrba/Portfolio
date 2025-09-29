const toggleBtn = document.getElementById('toggleBtn');
const extraContent = document.getElementById('extraContent');

toggleBtn.addEventListener('click', () => {
  extraContent.classList.toggle('show');
  toggleBtn.textContent = extraContent.classList.contains('show') ? 'Leia Menos' : 'Leia Mais';
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
