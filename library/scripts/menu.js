(function () {
    const item = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.nav');
    const menuCross = document.querySelector('.nav__cross')
    item.addEventListener('click', () => {
        burgerMenu.classList.add('menu__nav-appears');
        i = 0;
        document.querySelector('.dropMenu_Profile_no_Auth').style.visibility = 'hidden';
        document.querySelector('.dropMenu_Profile_no_Auth').style.opacity = 0;
    });
    menuCross.addEventListener('click', () => {
        burgerMenu.classList.remove('menu__nav-appears');
    })
}());
(function () {
    const item = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.nav');
    const menuCross = document.querySelector('.main')
    item.addEventListener('click', () => {
        burgerMenu.classList.add('menu__nav-appears');
        
    });
    menuCross.addEventListener('click', () => {
        burgerMenu.classList.remove('menu__nav-appears');
    })
}());
(function () {
    const item = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.nav');
    const menuCross = document.querySelector('.ul11')
    item.addEventListener('click', () => {
        burgerMenu.classList.add('menu__nav-appears');
        
    });
    menuCross.addEventListener('click', () => {
        burgerMenu.classList.remove('menu__nav-appears');
    })
}());
(function () {
    const item = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.nav');
    const menuCross = document.querySelector('.footer')
    item.addEventListener('click', () => {
        burgerMenu.classList.add('menu__nav-appears');
        
    });
    menuCross.addEventListener('click', () => {
        burgerMenu.classList.remove('menu__nav-appears');
    })
}());