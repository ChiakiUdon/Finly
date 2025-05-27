const inputs = document.querySelectorAll('.pin-input input');
const buttons = document.querySelectorAll('.keypad button');

let currentIndex = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Handle clear (⨉)
    if (button.classList.contains('clear')) {
      if (currentIndex > 0) currentIndex--;
      inputs[currentIndex].value = '';
      return;
    }

    // Handle submit (⏎)
    if (button.classList.contains('submit')) {
      let pin = '';
      inputs.forEach(input => pin += input.value);
      alert("Entered PIN: " + pin);
      return;
    }

    // Handle number input
    if (currentIndex < inputs.length) {
      inputs[currentIndex].value = value;
      currentIndex++;
    }
  });
});
