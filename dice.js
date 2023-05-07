
function randomFinder(){
    var random=Math.floor((Math.random()*6)+1);
    return random;
}
var d1=randomFinder();
var d2=randomFinder();

var randomimagesource="images/dice"+d1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);

var randomimagesource="images/dice"+d2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource);

if(d1>d2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else if(d1<d2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
