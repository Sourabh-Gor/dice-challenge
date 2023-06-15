var diceNo1 = Math.floor(Math.random()*6)+1;
var diceIMG1 = "dice" + diceNo1 + ".png";
var diceIMGsrc1 = "images/" + diceIMG1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceIMGsrc1);
var diceNo2 = Math.floor(Math.random()*6)+1;
var diceIMG2 = "dice" + diceNo2 + ".png";
var diceIMGsrc2 = "images/" + diceIMG2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceIMGsrc2);
if (diceNo1 > diceNo2) {
  document.querySelector("h1").innerHTML = "🚩Play 1 Wins!";
}
else if (diceNo2 > diceNo1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
