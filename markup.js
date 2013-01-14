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
				  var selector = $(this).val();
				  selector_apply(selector);
			      });

    $('#reload').click(function(){
	var url = $('#url_input').val();
	var iframe_url = proxy + '?' + $.param([
	    {name:'url',value: url},
	    {name:'convert', value: $('#convert').attr('checked')}
	]);
	$('#target').attr('src', iframe_url);
	$('#target').each(function(){
	    $(this).contentWindow.location.reload(true);
	});
    });
});
