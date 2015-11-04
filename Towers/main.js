$(document).ready(function() {
    var $selected = null;
    $('[data-stack]').click(function() {
        if ($selected === null) {
            $selected = $(this).children().last().detach();
        } else {
            if (isLegal($(this))) {
                $(this).append($selected);
				checkWin();
                $selected = null;
            } 
        }
    });

    function isLegal($stack) {
		if (parseInt($stack.children().last().attr('data-block')) > parseInt($selected.attr('data-block')) || $stack.children().length === 0) {
			return true;
		} 
		return false;
    }
	
	function checkWin() {
		if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4){
			$('#announce-game-won').append('<h1>YOU WIN!</h1>');
		}
	}
});

// parseInt - not comparing number, only strings