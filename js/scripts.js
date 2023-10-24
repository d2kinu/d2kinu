document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hide all results first
      const allResults = document.querySelectorAll(".result");
      allResults.forEach((result) => {
        result.style.display = "none";
      });

      // Now display the clicked letter's result
      const letter = this.dataset.letter;
      const resultElement = document.getElementById(`${letter}-result`);
      resultElement.style.display = "block";
    });
  });

  const hideButtons = document.querySelectorAll(".hide");
  hideButtons.forEach((hideButton) => {
    hideButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click from reaching the .button event
      const letter = this.dataset.letter;
      const resultElement = document.getElementById(`${letter}-result`);
      resultElement.style.display = "none";
    });
  });
});
