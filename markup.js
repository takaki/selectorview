var wrap = 'wrap.cgi'

$(function(){
    function selector_apply(s){
	var target = $('#target').contents().find('*')
	with(target){
	    css("background", "");
	    css("border", "");
	}
	try{
	    console.log('find', s);
	    var target = $('#target').contents().find(s);
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
    function xpath_apply(s){
	console.log("xpath =>", s);
	var target = $('#target').contents().find('*');
	with(target){
	    css("background", "");
	    css("border", "");
	}
	try{
	    var target = $('#target').contents().xpath(s);
	    with(target){
		css("background", "#c88");
		css("border", "solid 2px red");
	    }
	} catch(e) {
	    if (e.name != "INVALID_EXPRESSION_ERR"){
		throw e;
	    }
	}
    };	


    $('#target').load(function(){
    });

    $('#selector_input').bind('click blur keydown keyup keypress change',
			      function(){
				  var selector = $(this).val();
				  selector_apply(selector);
			      });

    $('#xpath_input').bind('click blur keydown keyup keypress change',
			   function(){
			       var selector = $(this).val();
			       xpath_apply(selector);
			   });
    $('#reload').click(function(){
	var url = $('#url_input').val();
	var wrap_url = wrap + '?' + $.param([{name:'url',value: url}])
	$('#target').attr('src', wrap_url);
	$('#target').each(function(){
	    $(this).contentWindow.location.reload(true);
	});
    });
});
