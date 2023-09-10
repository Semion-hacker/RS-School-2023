let i = 0;
const dropMenuProfileNoAuth = document.querySelector('.dropMenu_Profile_no_Auth')

document.querySelector('.icon__div').addEventListener('click', function(){
    if (i === 0) {
        dropMenuProfileNoAuth.style.visibility = 'visible';
        dropMenuProfileNoAuth.style.opacity = 1;
        i += 1;
    } else {
        dropMenuProfileNoAuth.style.visibility = 'hidden';
        dropMenuProfileNoAuth.style.opacity = 0;
        i = 0;
    };
});

/*(function () {
        const menuCross = document.querySelector('.body')
            menuCross.addEventListener('click', () => {
                if (i === 1) {
                    dropMenuProfileNoAuth.style.visibility = 'hidden';
                    dropMenuProfileNoAuth.style.opacity = 0;
                    i = 0;
                }
            })
        }());*/