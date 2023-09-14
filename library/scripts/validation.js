function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error_label').remove()
            parent.classList.remove('error')
        }

    };


    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error_label')
        errorLabel.textContent = text;
        
        parent.classList.add('error')
        parent.append(errorLabel)
    }



    let result = true;

    const allInput = form.querySelectorAll('input')

    for (const input of allInput) {

        removeError(input)

        if (input.dataset.minLength) {
            removeError(input)
            if (input.value.length < input.dataset.minLength){
                createError(input, 'Use 8 characters or more for your password');
                result = false;
            };
        };

        if (input.value == ''){
            removeError(input)
            createError(input, 'Please fill in the field')
            result = false;
        };
    };

    return result;
};

document.getElementById('add-form').addEventListener('submit', function (e) {
    e.preventDefault()

    if (validation(this) == true) {
        document.querySelector('.modal_Register_wrapper').style.visibility = 'hidden';
        document.querySelector('.modal_Register_wrapper').style.opacity = 0;
        alert('все ок')
    }
});

document.getElementById('add-form1').addEventListener('submit', function (e) {
    e.preventDefault()

    if (validation(this) == true) {
        document.querySelector('.modal_Log_In_wrapper').style.visibility = 'hidden';
        document.querySelector('.modal_Log_In_wrapper').style.opacity = 0;
        alert('все ок')
    }
});

document.getElementById('add-form2').addEventListener('submit', function (e) {
    e.preventDefault()

    if (validation(this) == true) {
        document.querySelector('.modal_buy_a_card_wrapper').style.visibility = 'hidden';
        document.querySelector('.modal_buy_a_card_wrapper').style.opacity = 0;
        alert('все ок')
    }
});