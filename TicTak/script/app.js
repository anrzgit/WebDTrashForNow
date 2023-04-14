const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");

var editPlayer1Button = document.getElementById('edit-player1-button');
var editPlayer2Button = document.getElementById('edit-player2-button');
console.log(editPlayer1Button);

editPlayer1Button.addEventListener('click',openPlayerConfig);
editPlayer2Button.addEventListener('click',openPlayerConfig);