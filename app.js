// Assignment 2: Display names

const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
  let currentIndex = 0;

  function showCurrentName() {
    const nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = names[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % names.length;
    showCurrentName();
  }

  function showPrevious() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    showCurrentName();
  }

  showCurrentName();
