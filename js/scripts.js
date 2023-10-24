document.addEventListener("DOMContentLoaded", function () {
  // Toggle function for displaying a letter's result
  window.toggle = function (letter) {
    // Hide all results first
    const allResults = document.querySelectorAll(".result");
    allResults.forEach((result) => {
      result.style.display = "none";
    });

    // Now display the clicked letter's result
    const resultElement = document.getElementById(`${letter}-result`);
    resultElement.style.display = "block";
  };

  // Hide function for hiding a letter's result
  window.hide = function (letter) {
    const resultElement = document.getElementById(`${letter}-result`);
    resultElement.style.display = "none";
  };
});
