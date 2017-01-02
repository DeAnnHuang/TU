const $win = $(window),
    $header = $('header'),
    $logo = $('header .logo');


$win.scroll(function() {
    $win.width() > 414 && $header.offset().top == 0 ? $logo.css('background-color', '#fff') : $logo.css('background-color', 'transparent');

})
