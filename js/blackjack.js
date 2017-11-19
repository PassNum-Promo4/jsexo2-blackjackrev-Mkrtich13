// compare user number with computer number.
function compareBlackJ() {
  var random = Math.floor(Math.random()*11);
  var number = document.getElementById("formBlackJ__number").value;


  if(random <= number ) {
    document.getElementById("result").innerHTML = "Vous avez perdu";
  } else if (random > number ){
    document.getElementById("result").innerHTML = "Vous avez gagné";
  }


}
