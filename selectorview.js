var proxy = 'proxy.cgi'

$(function(){
    function selector_apply(s){
	with($('#target').contents().find('*')){
	    css("background", "");
	    css("border", "");
	}
	try{
	    if ($('input[name="type"]:checked').val() == 'css'){
		var target = $('#target').contents().find(s);
	    } else {
		var target = $('#target').contents().xpath(s);
	    }		

	    with(target){
		css("background", "#c88");
		css("border", "solid 2px red");
	    }
	} catch(e) {
	    if(!console.log("??", e instanceof Error)){
		throw e;
	    }
	}
    };	

    $('#selector_input').bind('click blur keydown keyup keypress change',
			      function(){
                                  alert('disabled by security reason');
			      });

    $('#reload').click(function(){
	alert('disabled by security reason');
    });
});
