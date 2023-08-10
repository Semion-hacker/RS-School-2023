(function () {
    const item = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.nav');
    const menuCross = document.querySelector('.nav__cross')
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
/*(function () {
    const item = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.nav');
    const menuCross = document.querySelector('.header')
    item.addEventListener('click', () => {
        burgerMenu.classList.add('menu__nav-appears');
        
    });
    menuCross.addEventListener('click', () => {
        burgerMenu.classList.remove('menu__nav-appears');
    })
}());*/
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