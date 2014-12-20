var submitHandler = function (e) {
    var nick = $('#nick');
    var email = $('#email');
    var password = $('#password');
    var agree = $('#agree');
    var error = $('.alert');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = true;

    if (!nick.val()) {
        nick.css('border', '1px solid red');
        isValid = false;
    }
    if (!email.val() || !re.test(email.val())) {
        email.css('border', '1px solid red');
        isValid = false;
    }
    if (!password.val()) {
        password.css('border', '1px solid red');
        isValid = false;
    }
    if (!agree.is(':checked')) {
        agree.siblings().css('border-bottom', '1px solid red');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
        error.css('display', 'block');
    }
};

$('form').on('submit', submitHandler);