var boardColumn = document.getElementsByClassName("column");
var btnRestart = document.getElementById('restartGame');

$(document).ready(function() {
    let color = 'black';
    $('.column').click(function() {
      $(this).append(`<div class="disc ${color}"></div>`);
      if (color == 'red') {
        color = 'black';
        $("#turn").css("background-color", "black")
      } else {
        color = 'red';
        $("#turn").css("background-color", "red")
      }
      for (let i=0; i < boardColumn.length; i++) {
        if (boardColumn[i].childElementCount < 7) {
            continue;
        } else if (boardColumn[i].childElementCount == 7) {
            break;
        }
    }
    });
  });



  function restartGame() {
    for (let i=0; i < boardColumn.length; i++) {
        boardColumn[i].innerHTML = '';
    }
  }