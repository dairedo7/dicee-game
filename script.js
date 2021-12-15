// let dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png",
//     "images/dice5.png", "images/dice6.png"];

// let randomNumber1 = Math.floor(Math.random(dices) * 6);
// document.getElementById("img1").setAttribute("src", randomNumber1);

// let randomNumber2 = Math.floor(Math.random(dices) * 6);
// document.querySelectorAll("img")[1].setAttribute("src", randomNumber2);


let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageSource = "images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("#img2").setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


