// multiplication 1
function multiplication1(){
    var nbr1, nbr2, multiply;
    nbr1 = Number(document.getElementById("nbr1").value);
    nbr2 = Number(document.getElementById("nbr2").value);
    multiply = nbr1 * nbr2;
    document.getElementById("multiply").value = multiply;
}
// multiplication 2
function multiplication2(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
