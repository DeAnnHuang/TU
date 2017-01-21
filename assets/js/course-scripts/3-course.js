var $select = $(".course-class .class");
var $picked = $("#course-picked"),
    $picked_value = $(".class.select").length;
    $picked.html($picked_value);
    
$select.each(function() {

    $(this).click(function(event) {
        var $self = $(this);
        // 排除掉額滿的
        if (!$self.hasClass('full')) {

            // $self.toggleClass('select');
            if ($self.hasClass('select')) {
                $self.removeClass('select');
                $picked_value--;
            } else {
                $self.addClass('select');
                $picked_value++;
            }
            $picked.html($picked_value);
        }

    });
})
