// Global scope variable
let box = document.getElementById("box");
let button = document.getElementById("animateBtn");

/**
 * Function with parameter and return value
 * @param {string} color - The color to set for the box
 * @returns {string} - Confirmation message
 */
function changeBoxColor(color) {
  box.style.backgroundColor = color;
  return `Box color changed to ${color}`;
}

/**
 * Function to trigger animation
 * Demonstrates local scope
 */
function triggerAnimation() {
  // Local variable
  let message = changeBoxColor("purple");
  console.log(message);

  // Add animation class
  box.classList.add("animate");

  // Remove animation class after animation ends
  setTimeout(() => {
    box.classList.remove("animate");
    changeBoxColor("tomato"); // Reset color
  }, 2000);
}

// Event Listener
button.addEventListener("click", triggerAnimation);
