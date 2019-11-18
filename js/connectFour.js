var boardColumn = document.getElementsByClassName("column");
var btnRestart = document.getElementById('restartGame');

$(document).ready(function() {
    let color = 'black';
    //Function to add game pieces to a column when the specific column is clicked
    $('.column').click(function() {
      if (this.childElementCount < 7) {
        $(this).append(`<div class="${color}"></div>`);
          //On click, change the coor after the game piece  placed
          if (color == 'red') {
            color = 'black';
            $("#turn").css("background-color", "black")
          } else {
            color = 'red';
            $("#turn").css("background-color", "red")
          }
    //Stop adding child nodes/game pieces if the number in a column reaches 7
    } else if (this.childElementCount >= 7) {
      $(this).click(function(event) {
        event.stopImmediatePropagation();
      });
    }
    });
  });

  //Remove game pieces from the board to reset the game.
  function restartGame() {
    for (let i=0; i < boardColumn.length; i++) {
        boardColumn[i].innerHTML = '';
    }
  }