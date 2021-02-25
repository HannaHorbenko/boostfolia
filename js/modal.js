(function () {
    'use strict';

    let btn = document.getElementById("modal-btn");
    let modal = document.getElementById("modal");
    let modalBody = document.querySelector('.modal__body');
    let modalClose = document.getElementById("modal-close");

    btn.onclick = function () {
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
        document.body.classList.toggle('overflow');
    }

    modalClose.onclick = function () {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
        document.body.classList.remove('overflow');

    }

    modal.addEventListener("click", function (event) {
        if (event.target == modalBody) {
            modal.style.opacity = "0";
            modal.style.visibility = "hidden";
            document.body.classList.remove('overflow');

        }
    })

})();
