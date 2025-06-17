// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Message
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});

// Dark Mode Toggle
const toggle = document.createElement('button');
toggle.textContent = '🌙 Dark Mode';
toggle.style.position = 'fixed';
toggle.style.bottom = '20px';
toggle.style.right = '20px';
toggle.style.padding = '10px';
toggle.style.borderRadius = '8px';
toggle.style.border = 'none';
toggle.style.background = '#333';
toggle.style.color = '#fff';
toggle.style.cursor = 'pointer';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// Dark Mode Toggle
const darkToggleBtn = document.getElementById('darkModeToggle');

darkToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
