console.log("Sesión JS03 Condicionales");

/******Declaracion de bloques******* */
//Ejemplo de las alzances de las variables
let nombre= "Rafa";
let ciudad="Guadalajara"; // var:es la misma variable con el bloque y da prioridad al bloque interno.
{
    const listado=["Olivia", "Benja", "Luis","Linda"]
    let nombre= "Fer";
    let ciudad="Cdmx"; // cuidado con var porque se puede redecara 
    let apellido= "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}`); // solo es de alzance local con los let adentro del bloque, las variables dentro del bloque se eliminan una vez fuera del bloque
}
console.log(`Participante ${nombre} que vive en ${ciudad}`);


/******Condicional IF******* */
/**
 * Sintaxis:
 *      if(condicionVerdarera) instruncción;
 * 
 *      if(condicionVerdadera) {  // para varias instrucciones se utiliza un bloque de codigo
 *              instruccion;
 *      }
 */

let edad= 25;
console.log("Declaracion antes del if***");
if(edad>24) console.log("La edad es mayor a 25");
else {
    console.log("La edad es menor a 25"); 
    console.log("Seguiremos evaluando"); // sin las llaves solo se ejecuta esta ya sea > o < de 25
} 
console.log("Declaracion despues del if***");


/******Operador ternario****** */
//Da un valor u otro , realiza el mismo efecto del if pero este es mas limpio. Tambien se pueden anidar operadores ternarios.
/**
 * Sintaxis
 *      condicion ? condicion_verdadera : condicion_falsa; 
 */

console.log(`La edad es ${edad>24 ? "mayor":"menor"} a 25`);
console.log(`La edad es ${edad===25 ? "es igual":(edad>24 ? "mayor":"menor")} a 25`); //son dos condicionres ternarias

/******Operador if, else if , else****** */
/**
 * if(condicionVerdadera) {  // para varias instrucciones se utiliza un bloque de codigo
 *              instruccion;
 *      }
 * else if (OtraCondicion){
 * }
 * else if (OtraCondicion){
 * }
 * else {
 * instrucciones;
 * }
 */
console.log("--------------Uso de if, else if, else-----------------");
// edad=20;
// if (edad===25) { 
//     console.log("La edad es igual a 25");
    
// } else if(edad>25) {
//     console.log("La edad es mayor a 25");
    
// } else {
//     console.log("La edad es menor a 25");
// }

//Otra forma mas complimida 
if(edad===25) comparacion ="igual";
else if (edad>24) comparacion="mayor";
else comparacion="menor";

console.log(`la edad es ${comparacion} a 25`);

/******Condicional switch****** */
console.log("--------------Condicional switch-----------------");
/**
 * Sintaxis: 
 * switch(expresion){
 *   case valor1: 
 *        instrucciones;
 *        break;   // si no ponemos en break , va seguir ejecutando hasta encontrar un break o salir del switch
 *    case valor2: 
 *        instrucciones;
 *        break;
 *    case valor3: 
 *        instrucciones;
 *        break;
 *    defaul:
 *        instrucciones;
 * }
 */
// deben ser condiciones muy puntuales, no se puede > ,< o ===
edad=25;
 comparacion="";
 switch (edad) {
    case 25:
        comparacion="es igual";
        break;
    case 24:
        comparacion="es menor";
        break;
    case 26:
        comparacion="es mayor";
        break;
    default:
        comparacion="*No se puede saber*";
 }
 console.log(`la edad ${comparacion} a 25`);


 console.log("--------------Ejercicio-----------------");
 let numeroMes=6;
 let estacion = "", mes = "";

switch (numeroMes) {
  case 1:
    mes = "Enero";
    estacion = "Invierno";
    break;
  case 2:
    mes = "Febrero";
    estacion = "Invierno";
    break;
  case 3:
    mes = "Marzo";
    estacion = "Primavera";
    break;
  case 4:
    mes = "Abril";
    estacion = "Primavera";
    break;
  case 5:
    mes = "Mayo";
    estacion = "Primavera";
    break;
  case 6:
    mes = "Junio";
    estacion = "Primavera";
    break;
  case 7:
    mes = "Julio";
    estacion = "Primavera";
    break;
  case 8:
    mes = "Agosto";
    estacion = estacion = "Primavera";
    break;
  case 9:
    mes = "Septiembre";
    estacion = "Otoño";
    break;
  case 10:
    mes = "Octubre";
    estacion = "Otoño";
    break;
  case 11:
    mes = "Noviembre";
    estacion = "Otoño";
    break;
  case 12:
    mes = "Diciembre";
    estacion = "Invierno";
    break;
  default:
        console.log("*no hay mes*");
}
console.log(`El mes de ${mes} se encuentra en la estación ${estacion}`);

//************Otro Ejercicio********* */

numeroMes=6;
 estacion = "", mes = "";
 if (numeroMes === 12 || numeroMes === 1 || numeroMes === 2) {
    estacion = "Invierno";
    if (numeroMes === 12) mes = "Diciembre";
    else if (numeroMes === 1) mes = "Enero";
    else mes = "Febrero";
  }
  else if (numeroMes >= 3 && numeroMes <= 5) {
    estacion = "Primavera";
    if (numeroMes === 3) mes = "Marzo";
    else if (numeroMes === 4) mes = "Abril";
    else mes = "Mayo";
  }
  else if (numeroMes >= 6 && numeroMes <= 8) {
    estacion = "Verano";
    if (numeroMes === 6) mes = "Junio";
    else if (numeroMes === 7) mes = "Julio";
    else mes = "Agosto";
  }
  else if (numeroMes >= 9 && numeroMes <= 11) {
    estacion = "Otoño";
    if (numeroMes === 9) mes = "Septiembre";
    else if (numeroMes === 10) mes = "Octubre";
    else mes = "Noviembre";
  }
  else {
    estacion = "No se encontro";
    mes = "No se encontro";
  }

  //************Otro Ejercicio********* */

  let online=true;
  let active=true;
  if(online){
    if(active){
        console.log('James')
    }
  }

online && active && console.log('James');  // es el codigo de arriba pero de foma simplificada , es el operador AND de corto circuito.


  