$(document).ready(function () {
    var slider = $('#slider');
    if (slider.length) {
        slider.slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // fade: true,
            // cssEase: 'linear'
        });
    }
});