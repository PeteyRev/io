'use strict';
$(document).ready(function() {
    var currentPlayer = 'X';
    $('[data-cell]').click(function() {
        if ($(this).text() === 'X' || $(this).text() === 'O') {
            console.log('Invalid Move');
        } else {
            $(this).text(currentPlayer);
            checkForWin();
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    });
	
    function horizontalWin() {
        return ($('[data-cell="0"]').text() === currentPlayer && $('[data-cell="1"]').text() === currentPlayer && $('[data-cell="2"]').text() === currentPlayer ||
            $('[data-cell="3"]').text() === currentPlayer && $('[data-cell="4"]').text() === currentPlayer && $('[data-cell="5"]').text() === currentPlayer ||
            $('[data-cell="6"]').text() === currentPlayer && $('[data-cell="7"]').text() === currentPlayer && $('[data-cell="8"]').text() === currentPlayer);

    }

    function verticalWin() {
        return ($('[data-cell="0"]').text() === currentPlayer && $('[data-cell="3"]').text() === currentPlayer && $('[data-cell="6"]').text() === currentPlayer ||
            $('[data-cell="1"]').text() === currentPlayer && $('[data-cell="4"]').text() === currentPlayer && $('[data-cell="7"]').text() === currentPlayer ||
            $('[data-cell="2"]').text() === currentPlayer && $('[data-cell="5"]').text() === currentPlayer && $('[data-cell="8"]').text() === currentPlayer);
    }

    function diagonalWin() {
        return ($('[data-cell="0"]').text() === currentPlayer && $('[data-cell="4"]').text() === currentPlayer && $('[data-cell="8"]').text() === currentPlayer ||
            $('[data-cell="2"]').text() === currentPlayer && $('[data-cell="4"]').text() === currentPlayer && $('[data-cell="6"]').text() === currentPlayer);
    }


    function checkForWin() {
        if (horizontalWin() || verticalWin() || diagonalWin()) {
            $('#announce-winner').html("PLAYER " + currentPlayer + " WINS!")
        }

    }

});

