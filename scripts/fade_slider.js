(function () {

    const activeClass = "fade-slider__item--visible";
    const slides = document.querySelectorAll(".fade-slider__item");
    let slideNum = 0 ;

    setInterval (function () {
        slides[slideNum].classList.remove(activeClass);
        slideNum ++;
        if (slideNum + 1 > slides.length) {
            slideNum = 0;
        }
        slides[slideNum].classList.add(activeClass);
    }, 5000);
} ());