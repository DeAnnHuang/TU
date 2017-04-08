const $win = $(window),
    $header = $('header'),
    $logo = $('header .logo');

if ($win.width() > 414) {
    $win.scroll(function() {

        if ($header.offset().top == 0) {
            $logo.css('background-color', '#fff');
            $header.css('background', 'rgba(255,255,255,0.6)');
        } else {
            $logo.css('background-color', 'transparent');
            $header.css('background', 'rgba(255,255,255,0.9)');
        }

    })
}
