const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const fullnameError = document.getElementById("fullname_error");
const emailError = document.getElementById("email_error");
const phoneError = document.getElementById("phone_error");
const passwordError = document.getElementById("password_error");
const confirmPasswordError = document.getElementById("confirmpassword_error");

form.addEventListener("submit", (e) => {
    let isValid = true;

    if (fullname.value.trim() === "") {
        fullnameError.textContent = "Full name is required";
        isValid = false;
    } else if (fullname.value.length < 3) {
        fullnameError.textContent = "Full name must be longer than 3 characters";
        isValid = false;
    } else {
        fullnameError.textContent = "";
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email required";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        emailError.textContent = "Invalid email";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone number required";
        isValid = false;
    } else if (!/^\d{11}$/.test(phone.value)) {
        phoneError.textContent = "The number must contion 11 digits";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password required";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = "Password must be longer than 6 characters";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Password confirmation required";
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "The password do not match";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // منع إرسال النموذج إذا كان هناك أخطاء
    if (!isValid) {
        e.preventDefault();
    }
});
