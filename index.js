var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomimages = "dice" + randomNumber1 + ".png";
var randomsource1 = "images/" + randomimages ;
var imge1 = document.querySelectorAll("img")[0];
imge1.setAttribute("src", randomsource1 );

var randomNumber2 = Math.floor(Math.random()*6)+1 ;
var randomimages2 = "images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomimages2);



if(randomNumber1 > randomNumber2 )
{
  document.querySelector("h1").innerHTML = "Player 1 wins !!";
}
else if (randomNumber2 > randomNumber1)
{
 document.querySelector("h1").innerHTML ="Player 2 wins !!";
}
else 
{
    document.querySelector("h1").innerHTML ="oohoo its a draw";
}







































