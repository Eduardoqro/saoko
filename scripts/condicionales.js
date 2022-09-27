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
console.log(`La edad es ${edad===25 ? "es igual":(edad>24 ? "mayor":"menor")} a 25`);