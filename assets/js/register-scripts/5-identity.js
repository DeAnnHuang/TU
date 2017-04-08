 $('#identity').multipleSelect({
     selectAll: false,
     width: '100%'
 });

 function HandleIdentityValue(select) {
     var ta = $('#roleid');
     ta.val(select);
 }
