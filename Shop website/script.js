const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuIcon.className = open
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
  menuIcon.id = 'menu-icon';
});

// Close the menu when a link is tapped
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuIcon.className = 'fa-solid fa-bars';
  })
);