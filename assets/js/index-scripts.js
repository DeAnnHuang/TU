const $win = $(window),
    $header = $('header'),
    $logo = $('header .logo');


$win.scroll(function() {
    $win.width() > 414 && $header.offset().top == 0 ? $logo.css('background-color', '#fff') : $logo.css('background-color', 'transparent');

})

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
$('.page-top').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 500);
})

const $body = $('body'),
    $menu_wrap = $('.menu-wrap'),
    $title = $('.menu-wrap .title'),
    $close_menu = $('.close-menu');

$close_menu.click(function() {
    $menu_wrap.addClass('hide');
    $body.css('overflow', 'scroll');
    $('.menu-wrap > div').addClass('hide');
});



function menuClickHandle(click_event, title, who) {
    click_event.click(function() {
        event.preventDefault();
        $body.css('overflow', 'hidden');
        $('.menu-wrap > div').addClass('hide');
        $menu_wrap.removeClass('hide');
        $title.html(title);
        who.removeClass('hide');
    })
}

menuClickHandle($('header .fa-search'), '搜尋', $('.menu-wrap .search'));
menuClickHandle($('header .fa-book'), '選課清單', $('.menu-wrap .lists'));
menuClickHandle($('header .fa-bell-o'), '通知', $('.menu-wrap .notice'));
menuClickHandle($('header .fa-bars'), '選單', $('.menu-wrap .menu'));
menuClickHandle($('.slider main .btn'), '登入', $('.menu-wrap .login'));
