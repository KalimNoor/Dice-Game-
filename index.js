//Dice player 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //images between dice1.png - dice6.png       

var randomImageSource = "images/" + randomDiceImage; //inside the folder images  images//dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource)  // getting the attribute and setting it to the var random image 

//Dice Player 2 
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)  


//If player 1 wins 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👍Player 1 wins!";
}

else if (randomNumber2 > randomNumber1) {                          //what if is greater than
    document.querySelector("h1").innerHTML = "👍Player 2 wins!"; //Grab the H1  and append the HTML in it 
}

else {
    document.querySelector("h1").innerHTML = "Draw"
}