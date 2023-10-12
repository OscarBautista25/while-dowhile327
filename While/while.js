var numeroSolicitado=0;
var control=0;
var resultado=0;
numeroSolicitado = prompt("Ingrese el número del que quiere obtener la suma de sus valores anteriores");
while (control<=numeroSolicitado) {
    resultado=control+resultado;
    control=control+1;
}
alert("La suma de los " +numeroSolicitado + " primeros números naturales es igual a " + resultado)