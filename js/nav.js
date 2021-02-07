(function () {
    'use strict';

    document.querySelector('.burger').addEventListener('click', function () {
        document.querySelector('.burger span').classList.toggle('active');
        document.querySelector('.menu').classList.toggle('toggle');
    })

    let menuBtns = document.querySelectorAll('.overlay-menu__item');
    menuBtns.forEach(menuBtn => {
        menuBtn.addEventListener('click', function () {
            document.querySelector('.burger span').classList.remove('active');
            document.querySelector('.menu').classList.remove('toggle');
        })
    })
})();