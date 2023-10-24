document.addEventListener("DOMContentLoaded", function () {
  // Toggle function for displaying a letter's result
  window.toggle = function (letter) {
    // Hide all results first
    const allResults = document.querySelectorAll(".hidden-content");
    allResults.forEach((content) => {
      content.style.display = "none";
    });

    // Now display the clicked letter's result
    const resultElement = document
      .getElementById(`${letter}-result`)
      .querySelector(".hidden-content");
    resultElement.style.display = "block";
  };

  // Hide function for hiding a letter's result
  window.hide = function (letter) {
    const resultElement = document
      .getElementById(`${letter}-result`)
      .querySelector(".hidden-content");
    resultElement.style.display = "none";
  };
});
