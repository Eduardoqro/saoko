console.log("Sesión JS05 Operadores");
console.log("######Operadores aritmeticos######");
/**
 * Operadores aritmeticos
 * + - * / % **
 */
let suma =3 + 4;
console.log("Valor de suma= "+ suma);

//Operadores de asignación
console.log("######Operadores asignacion######");
let numero;
numero=10;
numero +=10; //numero = numero +5;
numero -=5;  //numero= numero -5;

console.log("Valor del numero: "+ (numero+=3));

numero *=2; //30
numero /= 3; //10
numero %=2;
numero **=3;
console.log("Valor de número= "+ numero++); // 0
console.log("Valor de número= "+ ++numero);//2

console.log("######Operadores logicos ######");

//Operador &&. ||. !

let valorB= true&& true;
valorB= true && true || false && true;

console.log("Valor booleano: " +valorB);