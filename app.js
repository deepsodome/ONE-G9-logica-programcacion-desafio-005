// inicio app adivina un número - seleccionas rango de numero a buscar
//Variables
let numeroRangoIni = parseInt(prompt("Hola Amig@! \nApartir de cuál número quieres adivinar?"));   // asigna desde prompt usuario el número de rango
let numeroRangoFin = parseInt(prompt("Hola Amig@! \nHasta que número quieres adivinar?"));   // asigna desde prompt usuario el número de rango
let numeroSecreto = Math.floor(Math.random() * (numeroRangoFin - numeroRangoIni + 1)) + numeroRangoIni;
 // crea variable Y asigna el número a encontrar
let numeroUsuario = 0; // crea variable asignada para input de usuario igual a 0
//let textVeces = 'intento';  //crea variable texto para mensaje y se asigna en singular
let maximoIntentos = 0; //crea variable y se asigna el máximo
let intentos = 1;   //crea variable intentos a 0

maximoIntentos = parseInt(prompt("En cuántos intentos quierea adivinar?"));   // asigna desde prompt usuario el número de intentos
    //alert(numeroSecreto)
    //console.log(numeroSecreto);
    
// while(numeroSecreto != numeroUsuario){  - repite hasta que encuentra el número
while(numeroSecreto != numeroUsuario){  // repite hasta el maximo numero de intentos
    if (maximoIntentos > (numeroRangoFin - numeroRangoIni)){    //compara si el numero máximo de intentos es equivalente al rango de numeros entre inicio y fin de rango
        alert(`¡El máximo de intentos es INCORRECTO! \nSupera el rango de números. \n¡FIN DEL JUEGO! \nDa clic en -Aceptar- y pulsa la tecla -F5- para intentarlo de nuevo.`);      //muestra error numero máximo de intentos
        break;      //sale de loop
    }
    if (numeroRangoIni > numeroRangoFin || numeroRangoFin < numeroRangoIni){        //compara si rango inicial es menor a rango final
        alert(`¡El rango de números es INCORRECTO! \nEl número inicial debe ser menor al final. \n¡FIN DEL JUEGO! \nDa clic en -Aceptar- y pulsa la tecla -F5- para intentarlo de nuevo.`);     //muestra mensaje error rangos
        break;      //sale de loop
    }
    numeroUsuario = parseInt(prompt(`Intento ${intentos} de ${maximoIntentos} \nAdivina un número entre ${numeroRangoIni} y ${numeroRangoFin}           -${numeroSecreto}-`));        //asigna valor desde prompt de usuario
    /*
        compara valores de variables y despliega mensaje si la edad es mayot a diez
    */
   if (numeroUsuario < numeroRangoIni || numeroUsuario > numeroRangoFin){       //compara compara que el numero de usuario sea mayor a rango inicial y menor al rango final        
    alert(`¡Número inválido! \nEl rango para adivinar es entre ${numeroRangoIni} y ${numeroRangoFin} \nTe quedan ${(maximoIntentos - intentos)}  ${(maximoIntentos - intentos) == 1 ?'intento' : 'intentos'}`);        //muestra error numero usuario es menor a rango inicial y mayor a rango final
    //intentos++; //incrementa intentos
    }
    if (numeroSecreto == numeroUsuario) {       //compara si numero secreto es igual a numero usuario
        alert(`CORRECTO! \nEl número es: ${numeroUsuario}. Lo lograste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);      // lanza mensaje de aciertó
    }
    else { // no se cumple concidión
        //alert("No adivinaste el número!"); // mensaje de no acierta
        if (numeroUsuario < numeroSecreto){
            alert("AYUDA! \nEl número es mayor");       //lanza mensaje avisando si el número es mayor
        } else {
            alert("AYUDA! \nEl número es menor");       //lanza mensaje avisando si el número es menor
        }
        //incrementar el contador
        //intentos +=1;
        intentos++;
        //textVeces = 'intentos';       //asigna valor si fueron más de un intento
        if (intentos > maximoIntentos){  //compara cuantos intentos se han hecho
            alert(`PERDISTE! \nLlegaste al número máximo de intentos: ${maximoIntentos} \nDa clic en -Aceptar- y pulsa la tecla -F5- para intentarlo de nuevo.`);    //lanza mensaje avisando número de intentos
            break;      //sale de loop
        }
    }
}
