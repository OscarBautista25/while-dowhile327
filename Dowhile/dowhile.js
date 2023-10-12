var numerEntrada=0;
var opcion;
var resultado=1
do {
    opcion=parseInt(prompt("Elija una opción del menú 1. Calcular Factorial  2. Determinar si el numero es par   3. Finalizar proceso"));
    switch (opcion) {
        case 1:
            numerEntrada= prompt("Ingrese el número al que desea calcular el factorial")
            for (let i = 1; i <= numerEntrada; i++){
                resultado=resultado*i;
            }
            alert(resultado + " es el factorial de " +numerEntrada)
            break;
        case 2:
            numerEntrada= prompt("Ingrese el número del que desea saber si es par")
            if ((numerEntrada%2)==0) {
                alert("El número ingresado es par");
            } else {
                alert("El número ingresado es impar");
            }
            break;
        
        
    }
} while (opcion!=3);