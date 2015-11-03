'use strict';

$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        var $toDoitem = $(this).find('input[type="text"]').val();
        $('#todo-list').append('<li><input type="checkbox"> ' + $toDoitem + ' <input type="button" class="delete" value="Delete"/></li>');
        $('.delete').click(function() {
            $(this).parent().remove();
        });
    
    $('#todo-list').sortable();
	$('input:checkbox').change(
	    function(){
	        if ($(this).is(':checked')) {
	            $('#completed-list').append($(this).parent());
	        } else {
	        	$('#todo-list').append($(this).parent());
	        }
	    });
	});
});