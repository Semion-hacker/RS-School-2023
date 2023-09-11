let i = 0;
const modalLogIn = document.querySelector('.modal_Log_In_wrapper')
const modalRegister = document.querySelector('.modal_Register_wrapper')
const dropMenuProfileNoAuth = document.querySelector('.dropMenu_Profile_no_Auth')

document.querySelector('.icon').addEventListener('click', function(){
    if (i === 0) {
        i += 1;
        dropMenuProfileNoAuth.style.visibility = 'visible';
        dropMenuProfileNoAuth.style.opacity = 1;
        shop()
    } else {
        i = 0;
        dropMenuProfileNoAuth.style.visibility = 'hidden';
        dropMenuProfileNoAuth.style.opacity = 0;
    };
});

document.querySelector('.main').addEventListener('click', function(){
    i = 0;
    dropMenuProfileNoAuth.style.visibility = 'hidden';
    dropMenuProfileNoAuth.style.opacity = 0;
});

document.querySelector('.Profile_1_text_2').addEventListener('click', function(){
    modalLogIn.style.visibility = 'visible';
    modalLogIn.style.opacity = 1;
    i = 0;
    dropMenuProfileNoAuth.style.visibility = 'hidden';
    dropMenuProfileNoAuth.style.opacity = 0;
});

window.onclick = function (evl) {
    if (evl.target == modalLogIn) {
        modalLogIn.style.visibility = 'hidden';
        modalLogIn.style.opacity = 0;
    }
    if (evl.target == modalRegister) {
        modalRegister.style.visibility = 'hidden';
        modalRegister.style.opacity = 0;
    }
}

document.querySelector('.Profile_1_text_3').addEventListener('click', function(){
    modalRegister.style.visibility = 'visible';
    modalRegister.style.opacity = 1;
    i = 0;
    dropMenuProfileNoAuth.style.visibility = 'hidden';
    dropMenuProfileNoAuth.style.opacity = 0;
});

document.querySelector('.modal_Log_In_text2_register').addEventListener('click', function(){
    modalRegister.style.visibility = 'visible';
    modalRegister.style.opacity = 1;
    modalLogIn.style.visibility = 'hidden';
    modalLogIn.style.opacity = 0;
});

document.querySelector('.modal_Register_text2_register').addEventListener('click', function(){
    modalLogIn.style.visibility = 'visible';
    modalLogIn.style.opacity = 1;
    modalRegister.style.visibility = 'hidden';
    modalRegister.style.opacity = 0;
});