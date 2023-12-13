var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

var resultMessage = "";

switch (true) {
    case randomNumber1 > randomNumber2:
        resultMessage = "🚩 Player 1 wins!";
        break;
    case randomNumber1 === randomNumber2:
        resultMessage = "No one wins";
        break;
    default:
        resultMessage = "Player 2 wins! 🚩";
}

document.querySelector("h1").innerHTML = resultMessage;
