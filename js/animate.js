'use strict';

function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.top + bounding.height / 2 <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
function checkItems() {
    let items = document.querySelectorAll('.animate');

    items.forEach(item => {
        if (isInViewport(item)) {
            let animateMode = item.getAttribute('data-animate'),
                delay = item.getAttribute('data-delay'),
                speed = item.getAttribute('data-speed');

            if (animateMode) {
                item.classList.add('animate__animated', 'animate__' + animateMode);

            }
            if (delay) {
                item.classList.add(`animate__delay-${delay}s`);
            }

            if (speed) {
                item.classList.add('animate__animated', 'animate__' + speed);
            }
            item.classList.remove('animate');
        }
    })
}
checkItems();
window.addEventListener('scroll', function (e) {
    checkItems();
})