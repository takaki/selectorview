var wrap = 'wrap.cgi'

$(function(){
    var prev;
    function selector_apply(s){
	console.log("css =>", s);
	try{
	    var target = $('#target').contents().find(prev)
	    with(target){
		css("background", "");
		css("border", "");
	    }

	} catch(e) {
	    console.log("prev", e);
	}
	console.log('no prev error');
	prev = s;
	try{
	    console.log('find', s);
	    var target = $('#target').contents().find(s);
	    with(target){
		css("background", "#c88");
		css("border", "solid 2px red");
	    }
	} catch(e) {
	    console.log("new", e);
	}
    };	
    function xpath_apply(s){
	console.log("xpath =>", s);
	try{
	    var target = ('#target').contents().xpath(prev)
	    with(target){
		css("background", "");
		css("border", "");
	    }
	} catch(e) {
	    // console.log("prev", e);
	}
	prev = s;
	try{
	    console.log('find', s);
	    var target = $('#target').contents().xpath(s);
	    with(target){
		css("background", "#c88");
		css("border", "solid 2px red");
	    }
	} catch(e) {
	    // console.log("new", e);
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
