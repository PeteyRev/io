$(document).ready(function(){
	var $lastChild = null;
	$('[data-stack]').click(function(){
		if ($lastChild === null) {
		 $lastChild = $(this).children().last().detach();
		} else {
		$(this).append($lastChild);
	    $lastChild = null;
		}	   
	});


});