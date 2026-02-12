// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const sendMessageButton = document.getElementById('sendMessageButton');

    // Add event listener for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validate Email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate Subject
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'Please enter a subject');
            isValid = false;
        } else {
            clearError(subjectInput);
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Please enter your message');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Function to display error message
    function showError(input, message) {
        const parent = input.parentElement;
        const errorElement = parent.querySelector('.help-block.text-danger');
        errorElement.textContent = message;
        input.classList.add('is-invalid');
    }

    // Function to clear error message
    function clearError(input) {
        const parent = input.parentElement;
        const errorElement = parent.querySelector('.help-block.text-danger');
        errorElement.textContent = '';
        input.classList.remove('is-invalid');
    }

    // Function to validate email using regular expression
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
