const headerOne = document.querySelector('h1');

function typing() {

}

// Zmiana headera po przejściu slajdera

const $slider = $('.carousel-inner');
const $header = $('.header');

// let $sliderHeight = $slider.height();
// let $headerHeight = $header.height();
// let $topHeight = $sliderHeight + $headerHeight;
// let $documentTop = $(window).scrollTop();


$(window).scroll(function () {
    const $slider = $('.carousel-inner');
    const $header = $('.header');

    let $sliderHeight = $slider.height();
    let $headerHeight = $header.height();
    let $topHeight = $sliderHeight + $headerHeight;
    let $documentTop = $(window).scrollTop();

    if ($documentTop >= $topHeight) $header.addClass('sticky');
    if ($('body').hasClass('.body-sm')) $header.removeClass('sticky');
    if ($('body').hasClass('.body-xs')) $header.removeClass('sticky');
    else $header.removeClass('sticky');
});

//  go to top

$(window).scroll(function () {
    const $goToTop = $('.go-to-top');

    let $documentTop = $(window).scrollTop();

    if ($documentTop >= 150) $goToTop.addClass('visible');
    else $goToTop.removeClass('visible');
});

$('.go-to-top').on('click', function(){
    $(document).scrollTop(0);
})
