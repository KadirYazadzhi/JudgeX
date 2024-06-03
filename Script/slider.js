document.addEventListener("DOMContentLoaded", function() {
    var swiperOptions = {

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        touchEventsTarget: 'container',
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },
        initialSlide: 0,
    };

    if (window.innerWidth <= 768) {
        swiperOptions.loop = true;
    }

    var swiper = new Swiper('.swiper-container', swiperOptions);
});