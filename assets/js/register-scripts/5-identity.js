 $('#identity').multipleSelect({
     selectAll: false
 });

 function HandleIdentityValue(select) {
     var ta = $('#roleid');
     ta.val(select);
 }
