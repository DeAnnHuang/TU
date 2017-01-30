Delete_course($('.d-table .fa-times'), '.row');
Delete_course($('.m-table .delete-course'), '.card');

function Delete_course(deleteTrigger, deleteItem) {

    deleteTrigger.each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            $(this).closest(deleteItem).remove();
            refreshMoney();
        })
    });
}
