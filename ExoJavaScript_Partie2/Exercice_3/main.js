// JavaScript Document
function displayOut(){
  var lastName = document.getElementById('psuedo').value;
  // on incremente de 1 pour chaque ajout d'element ds l'input
  for (var i = 0; i < 1; i++){
    lastName[i].onclick = alert(lastName);
  }
}
