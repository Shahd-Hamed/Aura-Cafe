// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Booking Form Submit Logic
const bookingForm = document.getElementById('bookingForm');
const formStatus = document.getElementById('formStatus');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // Show Success Message
  formStatus.style.color = '#27ae60';
  formStatus.textContent = `Reservation confirmed, ${name}! Confirmation details sent to ${phone}.`;

  // Reset Form
  bookingForm.reset();
  
  setTimeout(() => {
    formStatus.textContent = '';
  }, 5000);
});