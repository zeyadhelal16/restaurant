// Get elements
const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Add event listener to the button
loginButton.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if fields are empty
  if (email === "" || password === "") {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Invalid Information. Please fill in all fields.";
  } else {
    // Hide error message if fields are filled
    errorMessage.style.display = "none";

    // Simulate a redirection to the home page
    alert("Login successful! Redirecting to the home page...");
    window.location.href = "restaurant.html"; // Redirect to home.html
  }
});