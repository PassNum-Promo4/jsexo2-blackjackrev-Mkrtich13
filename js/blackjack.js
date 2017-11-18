function nombre_aleatoire() {
  var al = Math.floor(Math.random()*10)+0;
  document.getElementById("formBlackJ__result-al").innerHTML = al.value;
  document.getElementById("formBlackJ-al").value = "";

}


function formBlackJ_result() {
  var nb = document.getElementById("formBlackJ__number");
  document.getElementById("formBlackJ__result").innerHTML = nb.value;
  document.getElementById("formBlackJ__number").value = "";
}


var nombre =
var aleatoire =

if (nombre > aleatoire) {
  document.getElementById("result").innerHTML = "Vous avez gagné";

} else if (nombre < aleatoire) {
  document.getElementById("result").innerHTML = "Vous avez perdu";
}
