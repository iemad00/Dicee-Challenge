

var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

var imgsrc1 = "images/dice" + random1 + ".png";
var imgsrc2 = "images/dice" + random2 + ".png";

document.querySelector(".img1").setAttribute("src",imgsrc1);
document.querySelector(".img2").setAttribute("src",imgsrc2);

if(random1 == random2){
    document.querySelector("h1").innerText = "Draw!";
}else if(random1 > random2){
    document.querySelector("h1").innerText = "🚩 Player 1 wins!";
}else{
    document.querySelector("h1").innerText = "Player 2 wins! 🚩";
}