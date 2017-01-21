var swiper1 = new Swiper('.swiper-container-1', {
    pagination: '.swiper-pagination-1',
    direction: 'vertical',
    paginationClickable: true,
    loop: true,
    autoplay: 3500,
    autoplayDisableOnInteraction: false,
    effect: 'fade'

});
var swiper2 = new Swiper('.swiper-container-2', {
    pagination: '.swiper-pagination-2',
    paginationClickable: true,
    loop: true,
    autoplay: 3500,
    autoHeight: true

});

const $close = $('.close');

$close.click(function(){
	$close.parent().hide('fast');
})