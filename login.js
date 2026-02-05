const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');


const username_error = document.getElementById('username_error');

const password_error = document.getElementById('password_error');

const form_error = document.getElementById('form_error');

form.addEventListener('submit',(e) => {



        if (username.value === '' || username.value == null) {
            e.preventDefault();
            username_error.innerHTML = "User Name is required";
        }

        else {
            username_error.innerHTML = "";
        }



    if(password.value.length <= 8){
        e.preventDefault();
        password_error.innerHTML = "password must be more than 9 characters";
    }

});