document.addEventListener("DOMContentLoaded", () => {
  const registerButtons = document.querySelectorAll('.registerButton');
  const howItWorks = document.getElementById('services');
  const formSection = document.getElementById('cashback-form');
  const closeFormBtn = document.getElementById('closeFormBtn');

  // Show form when any of the register buttons is clicked
  if (registerButtons.length && howItWorks && formSection) {
    registerButtons.forEach(button => {
      button.addEventListener('click', () => {
        formSection.style.display = 'block';
        howItWorks.style.display = 'none';

        // Hide all register buttons
        registerButtons.forEach(btn => btn.style.display = 'none');

        // Scroll to the form
        formSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // Close form and show previous section/buttons
  if (closeFormBtn) {
    closeFormBtn.addEventListener('click', () => {
      formSection.style.display = 'none';
      howItWorks.style.display = 'block';

      // Show all register buttons again
      registerButtons.forEach(btn => btn.style.display = 'inline-block');

      // Scroll to the services section
      howItWorks.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
