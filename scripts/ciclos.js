console.log("Sesion J04 Ciclos");
/**
 * La razon del porque se recomienda declara un arregloe un objeto con const, es para evitar que se cambie el *tipo* de dato;
 */


let arrayLet=[1,2,3,4];
const myArray=[10,11,12]; // el tipo de dato no se puede modificar con const , se queda como objeto
// arrayLet="holi Crayoli";
myArray.push("Holi Crayoli 2");
myArray[myArray.length]="Holi crayoli 3";
myArray[5]="xd";

//console.log(arrayLet);

myArray[3]="Mel"; //Para remplazar Holi Crayoli 2.
console.log(myArray);
 function reemplazar(myArray){
for (let index = 0; index < myArray.length; index++) {   // Se busco sobre el arreglo y se remplazo con Omar, se intero cada elemento del arreglo , se compara con el if el holi.. y si existe se reemplaza con omar.
    if(myArray[index]==="Holi crayoli 3") myArray[index]="Omar";
    }
 }

 //Rafa
 function reemplazarR(myArray, stringToReplace, newString) {
     const index = myArray.indexOf(stringToReplace); //si no exite retorna -1
     if(index>-1)myArray[index] = newString;
     return myArray;
 }
 console.log(reemplazarR(myArray, 11, "Rodrigo"));

//Rafa 2.0
function reemplazarOInsertar(myA, stringToReplace, newString) {
    return  myA.includes(stringToReplace) //condicon ? true : false
         ? myA[ myA.indexOf(stringToReplace) ]= newString  // myArray[i] = newData;
         : null;           
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Rodrigo"));
console.log(myArray);

// function reemplazarMargarita(myArray){  // si no esta el dato regresa el -1
//      return evaluacon ? myArray[myArray.indexOf('xd')]="Rafa": myArray;
// }
// console.log(reemplazar(myArray));

//--------------------------------CASO FIFO--------------------------------------
console.log("------------------Caso FIFO--------------------------")

/**
 * FIFO:
 *      E3 E2 E1 ---> [ ARREGLO ] ---> E3 E2 E1      //PRIMERO EN ENTRAR ES EL PRIMERO EN SALIR
 * 
 * LIFO:
 *      E3 E2 E1 ---> [ ARREGLO ] ---> E1 E2 E3  
 */
//                     1         2         3
const perecederos=["manzanas","quesos","fresas"];
//Agremos un elemento al final del arreglo:
perecederos.push("leche"); // sera mi 4o elemento
console.log(perecederos);
//sacamos el primer elemento del arreglo:
console.log("Elemento eliminado: "+perecederos.shift()); //salio el 1o elemento 
console.log(perecederos);
// LIFO
console.log("------------------Caso LIFO--------------------------")

const tienda =[...perecederos]; // se clono el repositorio porque estamos sobreescribiendo el array por el const y marcaria error
console.log(tienda);
//Agregamos un elemento al final del arreglo
tienda.push("el amor");
console.log(tienda);
//Sacamos el ultimo elemento  en entrar
console.log("Elemento eliminado: " + tienda.pop());
console.log(tienda);

//-----------------------------------------------------------------
//Modicar el arreglo
//[2,4,5,6];x2 =[4,8,10,12]
// haci se afecta el mismo arreglo
// const arrayNumbers = [1, 2, 3, 4, 5];
//    function duplicar (array1){
//      for (let i=0; i<array1.length; i++){
//         array1[i]*=2; // array1[i] =array[i]*2
//      }
//        return array1;
//    }
// console.log(duplicar(arrayNumbers));
// console.log(arrayNumbers);

const arrayNumbers = [1, 2, 3, 4, 5];
   function duplicar (array1){
    let total=[];
     for (let i=0; i<array1.length; i++){
        total.push(array1[i]*2);// array1[i] =array[i]*2
        // o tambien total[i]*=2; en vez de la pasada linea
     }
       return total;
   }
 
   const duplicated= arrayNumbers.map(num=>num*2); // Es otra forma de mas plactica 

console.log("original: "+duplicar(arrayNumbers));
console.log(arrayNumbers);

//--------------------------------------------------------
console.log("##### Calccular el factorial de un número ######");

//--------------------------------------------------------
console.log('##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e" tiene ######');

const dato = 7; // Número del que queremos calcular el factorial
let r = 1;
for(let i = dato; i>0; i--){
    r *= i;
}
console.log(r);

