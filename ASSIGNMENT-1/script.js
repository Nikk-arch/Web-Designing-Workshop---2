// Custom JS (currently empty)

// Example: Navbar click log
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Navigation clicked:', link.textContent);
  });
});