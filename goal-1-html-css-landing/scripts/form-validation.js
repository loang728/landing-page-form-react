document.querySelectorAll('#cashback-form input[required], #cashback-form select[required]').forEach(input => {
  input.addEventListener('blur', () => {
    const label = input.closest('label');
    if (!label) return;

    // Remove old error message if exists
    const oldError = label.nextElementSibling;
    if (oldError && oldError.classList && oldError.classList.contains('error-msg')) {
      oldError.remove();
    }

    let errorMessage = '';

    if (!input.checkValidity()) {
      if (input.validity.valueMissing) {
        errorMessage = 'This field is required.';
      } else if (input.type === 'email' && input.validity.typeMismatch) {
        errorMessage = 'Please enter a valid email address.';
      } else if (input.type === 'tel' && input.validity.patternMismatch) {
        errorMessage = 'Please enter a valid phone number.';
      } else if (input.type === 'date' && input.validity.rangeUnderflow) {
        errorMessage = 'Please select a valid date.';
      } else {
        errorMessage = 'Invalid input.';
      }
    }

    if (errorMessage) {
      const errorSpan = document.createElement('span');
      errorSpan.className = 'error-msg';
      errorSpan.textContent = errorMessage;
      label.insertAdjacentElement('afterend', errorSpan);
    }
  });
});
