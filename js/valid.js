var myForm = document.querySelector('#form1');
myForm.addEventListener('submit', submitHandler, false);

function submitHandler(e) {
    var nick = document.querySelector('#nick');
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var agree = document.querySelector('#agree');
    var error = document.querySelector('.alert');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = true;

    if (!nick.value) {
        nick.className = 'warning';
        isValid = false;
    }
    if (!email.value || !re.test(email.value)) {
        email.className = 'warning';
        isValid = false;
    }
    if (!password.value) {
        password.className = 'warning';
        isValid = false;
    }
    if (!agree.checked) {
        agree.nextElementSibling.className = 'warning';
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
        error.style.display = 'block';
    }
}