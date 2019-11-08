var gameMarker = "X";

function changeMarkerX() {
    if (gameMarker = "O") {
        gameMarker = "X";
    }
    document.getElementById("turn-key").textContent = "Your Turn: X";
    console.log("The X button was clicked");
}

function changeMarkerO() {
    if (gameMarker = "X") {
        gameMarker = "O";
    }
    document.getElementById("turn-key").textContent = "Your Turn: O";
    console.log("The O button was clicked");
}

function placeGameMarker(square) {
    var squareRef = document.getElementById(square);

    squareRef.innerHTML = gameMarker;

    if (gameMarker == "X") {
        gameMarker = "O";
        document.getElementById("turn-key").textContent = "Your Turn: O";
    } else if (gameMarker == "O") {
        gameMarker = "X";
        document.getElementById("turn-key").textContent = "Your Turn: X";
    }
}

// function resetGameBoard() {
//     document.getElementsByClassName("playSpace").inner = "";
// }