console.log("Sesion JS02 funciones");
//**************Funcion declarada***********
//llamado de la función declarada
console.log("Multiplica de 5 * 6=" + multiplicar(5,6));
/**
 * Realizar una multiplicación de 2 números
 * Este es un ejemplo de una función declarada (function declaration, function statement).
 * Una de las caracteristicas de la funcion declaradas es que tiene un hoisting (elevación, funciona en cualquier poscion el llamado).
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns resultado de la multiplicación de a*b
 */
function multiplicar(a,b){
    return a*b;
}

//**************Funcion expresada***********
/**
 * Las funciones expresadas(function expressions) son declaradas dentro de una asignación de una variable.
 * Estas funciones pueden ser anónimas(no tener nombre). Las funciones expresadas no tiene hoisting.
 */
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */
const suma = function(a,b){return a+b}  //la ventaja es que se puede trabajar en una sola linea, se muestran como se asignara una variable
//llamado de la función expresada
console.log("El resultado de 56+4=" +suma(56,4));

//**************Funcion autoinvocadas***********
/**
 * Las funciones autoinvocadas(self-invoking functions) pueden ser anónimas y se autoejecutan() en su declaración. 
 */
(function (){
    console.log("===============");
    console.log("Hola Crayoli");
    console.log("===============");
})();  //estos paretensis llaman a lo que estan dentro del parentesis.

//**************Funcion flecha***********
/**
 * Las funciones flecha (arrow functions) funcionan de forma similar a las declaradas, pero no requieren la palabra "function" y si tienen una solo instrucción y es el retorno,
 * no requiere la instrucción "return" . Estas funciones son las mas utilizadas, tampoco se puede elevar 
 * (parameters)=> operation;
 * (parameters)=>{return data};
 */
/**
 * Realiza la operación de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns  La resta de a-b
 */
const resta= (a,b)=> a-b;
console.log("La resta de 10-5="+ resta(10,5));

//**************Funcion inicializado en los parrafos***********

/**
 * Función con parámetros inicializados
 */

function divide(a,b=0) {
    return a/b; 
}
console.log("La division de a/b="+divide(4));

//**************Funciones recursivas**********


function factorial(num) {
   if(num<=0) return 1; // con este detenemos el ciclo , se corre el peligro de generar ciclos infinitos si sabesmo detener el ciclo.
   return(num*factorial(num-1));
}
console.log("Factorial de 5 =" + factorial(4));

//**************Reset Parameters**********

function sum(a,b,...resto) { //con ...(unavariable) podemos colocar mas parametros y se maneja como un array, el forEach llama a la función flecha.
    let suma=a+b;
    resto.forEach(element => { //esta es una funcion flecha, si solo son dos datos solo hace el let por que el arreglo "resto" no tiene elementos (no hay que interar), si son mas de dos entra el forEach
        //sumar =sumar+element;
        suma+=element;
    });
    return suma;
}
console.log("El resultdo de sumar varios numeros=" + sum(2,3,5,7,3));   //Toma solo la posicion con (a,b)  