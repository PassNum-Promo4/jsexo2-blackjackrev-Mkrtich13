// a function for compare user number with computer number.
function compareBlackJ() {
  var random = Math.floor(Math.random()*11);
  var number = document.getElementById("formBlackJ__number").value;
  // show random value in html.
  var randomResult = document.getElementById("al").innerHTML = random;

  // game condition.
  if(random < number ) {
    document.getElementById("result").innerHTML = "Vous avez gagné";
  } else if (random >= number ) {
    document.getElementById("result").innerHTML = "Vous avez perdu";
  }


}
