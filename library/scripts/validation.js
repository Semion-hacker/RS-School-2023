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

        if (input.dataset.check2) {
            removeError(input)
            if (input.value != localStorage.getItem('Password')){
                createError(input, "Wrong password");
                result = false;
            };
        };

        if (input.dataset.check) {
            removeError(input)
            if (input.value != localStorage.getItem('E-mail')){
                createError(input, "Couldn't find your account");
                result = false;
            };
        };

        if (input.dataset.equalLength3) {
            removeError(input)
            if (input.value.length != input.dataset.equalLength3){
                createError(input, 'CVC must contain 3 digits');
                result = false;
            };
        };


        if (input.dataset.equalLength2) {
            removeError(input)
            if (input.value.length != input.dataset.equalLength2){
                createError(input, 'Expiration code must contain 2 digits');
                result = false;
            };
        };


        if (input.dataset.equalLength) {
            removeError(input)
            if (input.value.length != input.dataset.equalLength){
                createError(input, 'Card number must contain 16 digits');
                result = false;
            };
        };

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
        document.querySelector('.modal_Register_wrapper').style.display = 'none';
        localStorage.setItem('name', document.querySelector('.modal_Register_forn_input').value)
        localStorage.setItem('name2', document.querySelector('.modal_Register_forn_input2').value)
        localStorage.setItem('E-mail', document.querySelector('.modal_Register_forn_input3').value)
        localStorage.setItem('Password', document.querySelector('.modal_Register_forn_input4').value)
        let counter = 1;
        let CardNumberMeaning = generateCardNumber();
        localStorage.setItem('CardNumber', CardNumberMeaning);
        document.querySelector('.Card_number_text_02').textContent = CardNumberMeaning1;
        document.querySelector('.Profile_2_text_1').textContent = CardNumberMeaning;
        document.querySelector('.dropMenu_Profile_no_Auth').style.display = 'none';
        document.querySelector('.dropMenu_Profile_with_Auth').style.display = 'flex';
        z = 0;
        document.querySelector('.dropMenu_Profile_with_Auth').style.visibility = 'hidden';
        document.querySelector('.dropMenu_Profile_with_Auth').style.opacity = 0;
        document.querySelector('.icon').style.display = 'none';
        document.querySelector('.icon2').style.display = 'flex';
        document.querySelector('.icon2').textContent = localStorage.getItem('name')[0] + localStorage.getItem('name2')[0];
    }
});

document.getElementById('add-form1').addEventListener('submit', function (e) {
    e.preventDefault()

    if (validation(this) == true) {
        let CardNumberMeaning1 = localStorage.getItem('CardNumber');
        document.querySelector('.Card_number_text_02').textContent = CardNumberMeaning1;
        document.querySelector('.Profile_2_text_1').textContent = CardNumberMeaning1;
        document.querySelector('.modal_Log_In_wrapper').style.display = 'none';
        document.querySelector('.dropMenu_Profile_no_Auth').style.display = 'none';
        document.querySelector('.dropMenu_Profile_with_Auth').style.display = 'flex';
        z = 0;
        document.querySelector('.dropMenu_Profile_with_Auth').style.visibility = 'hidden';
        document.querySelector('.dropMenu_Profile_with_Auth').style.opacity = 0;
        document.querySelector('.icon').style.display = 'none';
        document.querySelector('.icon2').style.display = 'flex';
        document.querySelector('.icon2').textContent = localStorage.getItem('name')[0] + localStorage.getItem('name2')[0];
        counter += 1;
    }
});

document.getElementById('add-form2').addEventListener('submit', function (e) {
    e.preventDefault()

    if (validation(this) == true) {
        document.querySelector('.modal_buy_a_card_wrapper').style.display = 'none';
    }
});

function generateCardNumber() {
    var cardNumber = "";
    var possibleChars = "0123456789ABCDEF";
  
    for (var i = 0; i < 9; i++) {
      var randomIndex = Math.floor(Math.random() * possibleChars.length);
      cardNumber += possibleChars.charAt(randomIndex);
    }
  
    return cardNumber;
}