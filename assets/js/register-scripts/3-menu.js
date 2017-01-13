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
