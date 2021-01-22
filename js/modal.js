(function() {
  'use strict';
  
  let btn = document.getElementById("modal-btn");
  let modal = document.getElementById("modal");
  let modalBody = document.querySelector('.modal__body');
  let modalClose = document.getElementById("modal-close");
  console.log(btn);
  console.log(modal);
  console.log(modalClose);
  
btn.onclick = function () {
   modal.style.opacity = "1";
   modal.style.visibility = "visible";
}
  
modalClose.onclick = function () {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}
  
modal.addEventListener("click", function (event) {
    if (event.target == modalBody) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }
    console.log(event.target);
})

})();
 