var $wdth = $(window).width();

function refreshMoney() {
    if ($wdth > 414) {
        calMoney($('.d-table .money'));
    } else {
        calMoney($('.m-table .money'));
    }
}


function calMoney(moneyItems) {
    var sum = 0;
    moneyItems.each(function(index, el) {

        sum += parseInt($(this).html());
    });
    $('.totalMoney').html(sum);
}

jQuery(document).ready(function($) {
	refreshMoney();
});