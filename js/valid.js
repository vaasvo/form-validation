var myForm = document.querySelector('#form1');
//var submitButton = document.querySelector('#submit');
myForm.addEventListener('submit', submitHandler, false);
//submitButton.addEventListener('click', submitHandler, false);

function submitHandler (e) {
    var nick = document.querySelector('#nick');
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var agree = document.querySelector('#agree');
    var error = document.querySelector('.alert');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = true;

    if (!nick.value) {
        nick.style.border = '1px solid red';
        isValid = false;
    }
    if (!email.value || !re.test(email.value)) {
        email.style.border = '1px solid red';
        isValid = false;
    }
    if (!password.value) {
        password.style.border = '1px solid red';
        isValid = false;
    }
    if (!agree.checked) {
        agree.nextElementSibling.style.borderBottom = '1px solid red';
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
        error.style.display = 'block';
    }
}