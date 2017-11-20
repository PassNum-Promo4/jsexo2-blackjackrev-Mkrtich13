// For first step.
// a function for compare user number with computer number.
function compareBlackJ() {
  var random = Math.floor(Math.random()*11);
  var number = document.getElementById("formBlackJ__number").value;
  // show random value in html.
  var randomResult = document.getElementById("al").innerHTML = random;

  // game condition.
  if (random < number ) {
    document.getElementById("result").innerHTML = "Vous avez gagné";
  } else if (random >= number ) {
    document.getElementById("result").innerHTML = "Vous avez perdu";
  }

}


// For second step.
function generateNumber() {
  var playerNb = Math.floor(Math.random()*11) + 1;
  document.getElementById("playerNumber").innerHTML = playerNb;
  var cpuNb = Math.floor(Math.random()*11) + 1;
  var cpuNbHidden = document.getElementById("cpuNumber").innerHTML = cpuNb;
  document.getElementById('cpuNumber').style.display='none';
}

function moreNumber() {
  var playerNbString = document.getElementById("playerNumber").innerHTML;
  var playerNbInt = Number(playerNbString);
  var additionPlayerNb = document.getElementById("formBlackJ2__again").onsubmit = playerNbInt + Math.floor(Math.random()*11) + 1;

  var cpuNumberString = document.getElementById("cpuNumber").innerHTML;
  var cpuNumberInt = Number(cpuNumberString);
  var additionCpuNumber = document.getElementById("formBlackJ2__again").onsubmit = cpuNumberInt + Math.floor(Math.random()*11) + 1;
  document.getElementById("playerNumber").innerHTML = additionPlayerNb;
  document.getElementById("cpuNumber").innerHTML = additionCpuNumber;

  if (additionPlayerNb > 21 ) {
    document.getElementById("resultBlackJ").innerHTML = "Vous avez dépassé 21, c'est perdu !";
  } else if (additionPlayerNb > additionCpuNumber && additionPlayerNb <= 21) {
    document.getElementById("resultBlackJ").innerHTML = "Vous avez gagné !";
  } else if (additionPlayerNb < additionCpuNumber && additionCpuNumber <= 21) {
    document.getElementById("resultBlackJ").innerHTML = "Vous avez perdu !";
  }
}

function stop() {
  document.getElementById('cpuNumber').style.display='block';
  var cpuNumberString = document.getElementById("cpuNumber").innerHTML;
  var cpuNumberInt = Number(cpuNumberString);
  var playerNbString = document.getElementById("playerNumber").innerHTML;
  var playerNbInt = Number(playerNbString);

  if (playerNbInt > cpuNumberInt) {
    document.getElementById("resultBlackJ").innerHTML = "Vous avez gagné !";
  } else if (playerNbInt < cpuNumberInt) {
    document.getElementById("resultBlackJ").innerHTML = "Vous avez perdu !";
  } else if (playerNbInt == cpuNumberInt) {
    document.getElementById("resultBlackJ").innerHTML = "Egalité !";
  }


}
