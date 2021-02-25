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


            if (item.getAttribute('data-count') == "true") {
                animateValue("value", 0, 46, 1200),
                    animateValue("value1", 0, 128, 800),
                    animateValue("value2", 0, 450, 100),
                    animateValue("value3", 0, 100, 920)
            }
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
function animateValue(id, start, end, duration) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function () {
        current += increment;
        if (id == 'value2') {
            current++;

        }
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
        if (id == 'value3' && current > 99) {
            current += '+';
            obj.innerHTML = current;

        }

    }, stepTime);
}
checkItems();
window.addEventListener('scroll', function (e) {
    checkItems();
})

