const name = document.getElementById('name');
const email = document.getElementById('email');
const guests = document.getElementById('guests');
const form = document.getElementById('form');


const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');

const guests_error = document.getElementById('guests_error');

form.addEventListener('submit',(e) => {


        var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (name.value === '' || name.value == null) {
            e.preventDefault();
            name_error.innerHTML = "Name is required";
        }



        else {
            name_error.innerHTML = "";
        }

        if (!email.value.match(email_check)) {
            e.preventDefault();
            email_error.innerHTML = "Valid Email is required";

        }



        else {
            email_error.innerHTML = "";
        }




        if (guests.value.length <= 0) {
            e.preventDefault();
            guests_error.innerHTML = "you must enter guests";
        }


        else {
            guests_error.innerHTML = "";
        }
    })