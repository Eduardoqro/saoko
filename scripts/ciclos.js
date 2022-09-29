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

//------------------------------------------------------------------------------------------

// Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b)

// Array.from(`pepe pecas pica papas pero`);
// (26) ['p', 'e', 'p', 'e', ' ', 'p', 'e', 'c', 'a', 's', ' ', 'p', 'i', 'c', 'a', ' ', 'p', 'a', 'p', 'a', 's', ' ', 'p', 'e', 'r', 'o']
//desglosa y le axita un index a cada letra

// .map(element=> (element == "e") * 1 ) ests funcion entrega un nueblo arreglo por medio de map(hace una copia de mi arregle  pero el de la funcion flecha) para que intere cada elemento

// el element es igual a p es true y se almacenza 

// Array.from(`pepe pecas pica papas pero`).map(element=> element == "p");
// (26) [true, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false, true, false, false, false, true, false, false, false]

// Array.from(`pepe pecas pica papas pero`).map(element=>Number(element == "p"));
// (26) [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0]
// Convierte el false y true en un numerico

// Array.from(`pepe pecas pica papas pero`).map(element=> (element == "p") * 1 )        otra forma de convertirlo numerico es por *1 
// (26) [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0]
// true*1
// 1
// false*1
// 0
// [1,2,3,4].reduce((total, currentValue)=>total+currentValue) // utlizamos la funcion flecha para realiza la suma 
// 10
// las variables de .reduce puede ser cualquiere son variable
// [1,2,3,4].reduce((total, currentValue)=>total+currentValue,20) // definiendo con valor inicial 20 , en automatico inicio con 0 si no lo definimos
// 30
// Array.from(`pepe pecas pica papas pero`).map(element=> (element == "p") * 1 ).reduce((total,currentValue)=>total+currentValue);
// 7  // son el numero de p de acuerdo al texto

// const contarCaracteres = (frase, character) => frase.split("").filter(elemento => elemento === character).length

// contarCaracteres(`pepe pecas pica papas pero`,'p')
// 7

// `pepe pecas pica papas pero`.split("").filter(elemento => elemento === 'p').length //esto hace la funcion pasada
// 7
// `pepe pecas pica papas pero`.split("") // va separa cada letra con el split //separa el texto en un arreglo
// (26) ['p', 'e', 'p', 'e', ' ', 'p', 'e', 'c', 'a', 's', ' ', 'p', 'i', 'c', 'a', ' ', 'p', 'a', 'p', 'a', 's', ' ', 'p', 'e', 'r', 'o']
// `pepe pecas pica papas pero`.split("pe") //reemplaza la palabra con un espacio con el split
// (5) ['', '', ' ', 'cas pica papas ', 'ro']

// `pepe pecas pica papas pero`.split("").filter(elemento => elemento === 'p') //Crea un nuevo arreglo por .filter que cumpla la condicion(flecha, si elemento es igual a p es true y regresa ese elemento)
// (7) ['p', 'p', 'p', 'p', 'p', 'p', 'p']

// `pepe pecas pica papas pero`.split("").filter(elemento => elemento === elemento) // ejemplo si poner esa condicion 
// (26) ['p', 'e', 'p', 'e', ' ', 'p', 'e', 'c', 'a', 's', ' ', 'p', 'i', 'c', 'a', ' ', 'p', 'a', 'p', 'a', 's', ' ', 'p', 'e', 'r', 'o']

// `pepe pecas pica papas pero`.split(" ").filter(elemento => elemento === 'pica') //para busca por palabra por medio de la separacion " "
// ['pica']

// `pepe pecas pica papas pero`.split("").filter(elemento => elemento === 'p').length // con lenght nos muestra la cantidad de elementos en el arreglo  ['p', 'p', 'p', 'p', 'p', 'p', 'p'] y obtenemos el numero de p
// 7
// //--------------------------------------el anterior ejercio pero en mayusculas
// `Pepe Pecas Pica Papas Pero`.split("").filter(elemento => elemento === 'p'|| elemento==='P').length; // CON LA CONDICONAR OR SE PUEDE COMPARAR SI ES P o p // HACI no 'p'||'P' porque realiza esto primero y no compara , con el arragle
// 7

// // otra forma

// `Pepe Pecas Pica Papas Pero`.toUpperCase();
// 'PEPE PECAS PICA PAPAS PERO'

// `Pepe Pecas Pica Papas Pero`.toLocaleLowerCase().split("").filter(elemento => elemento === 'p').length; // convertirmos todo el texto en minisculas y se puede ya compara
// 7

// // otra forma con exprecion regular 
// `Pepe Pecas Pica Papas Pero`.match("Pecas");
// //['Pecas', index: 5, input: 'Pepe Pecas Pica Papas Pero', groups: undefined]
// `Pepe Pecas Pica Papas Pero`.match(/P/g); //g de global .match entrega un arreglo
// (5) ['P', 'P', 'P', 'P', 'P']
// `Pepe Pecas Pica Papas Pero`.match(/P/gi);// va encontra las p ya sean mayusculas o minusculas con gi
// (7) ['P', 'p', 'P', 'P', 'P', 'p', 'P']

// //

// `Pepe Pecas Pica Papas Pero`.match(/x/gi)? `Pepe Pecas Pica Papas Pero`.match(/x/gi).lenght:0; // con el operador tenerio ? podemos compara (como un pequeño if)
// 0

// (busca=`Pepe Pecas Pica Papas Pero`.match(/p/gi)) ? busca.length : 0; //
// 7
// //-------
// `Pepe Pecas Pica Papas Pero`.split("P").length; //el split regresa un valor mas por eso 6 en vez de 5
// 6
// `Pepe Pecas Pica Papas Pero`.split("P").length-1;
// 5

//############################################################################ 
console.log("#### Ciclo for ####");
/**
 * Sintaxis  de ciclo for
 *  for(inicio; condicion; expresionFinal){
 *      instruciones:     
 *  }
 * Tenemos una condicion de inicio, despues la condicion, si es verdadera se ejecutar las instruciones, si no no lo ejecutar .La condcion terminar sale del for  
 * */

// for (let i=0; i <=10; i++) {
//     console.log("El valor de la interacion es: "+i);
// }
// console.log("####");

// for (let i=0; i <=10; i++) {
//     console.log("El valor de la interacion es: "+i);
    //console.log("El valor de la interacion es *2: "+(i*2)); //solo el for toma el primer i, esta parte no tenemos ya i definina y marca error
// }
console.log("-----------------------------------");

// for (let i=0; i <=10; i++)
// console.log("El valor de la interacion es: "+i);
// console.log("El valor de la interacion es *2: "+(i*2));
//console.log("####For continuo###") /// en este caso for emple la consola porque toma hasta este linea de codigo , lo demas esta en comentario.

/**
 * La instrucion Break, rompe el ciclo for, no importa el n. de interacion en la que se encuentre. 
 * La isnstrucion Continue, interrumpe la interación en curso y continua a la sig. interación.
 */

let ch18=["Abelardo", "Audry","Angel","Sharon","Bren", "Pato Lucas","Victor"];
// for (let i = 0; i <ch18.length; i++) {
//     if(ch18[i]==="Pato Lucas"){ 
//         console.warn("Atención, esta persona no pertenece a la CH18:" +ch18[i]); //manda un warnig pero sigue interando sin el break.
//         break;
//     }
// console.log("Persona de CH18: "+ch18[i]);
// }

// for (let i = 0; i < ch18.length; i++) {
//     if(ch18[i]!=="Pato Lucas")continue; // solo imprime el warnig, continua con la interacion pero solo aparece el warnig
//     console.log("Atención, esta persona no pertenece a la CH18:" +ch18[i]);
// }

console.log("############ Matrices############");

//const generation=[[],[],[]];
const generation=[
["Abelardo", "Audry","Angel","Sharon","Bren","El bromas", "Pato Lucas","Victor"], 
["Yosceline","Mariana","Karen","Padro"],
["Emiliano", "Jonath","Esteban","El bromas"]
];
 
// console.log("Proxima presentacion:"+ generation[1][2]);  para buscar a Karen 
 //Itear todo los elementos del arreglo
// for (let i = 0; i < generation.length; i++) {
//     console.log(`Los integrantes de la corte ${i+1} son: `);
//    for (let f = 0; f < generation[i].length; f++) {
//           console.log(generation[i][f]);
//    } 
// }

//Dectar a "El bromas" e idicar con una alerta donde se encuentra.
// for (let i = 0; i < generation.length; i++) {
//    for (let f = 0; f < generation[i].length; f++) {
//         if(generation[i][f]==="El bromas"){
//             console.warn(`Atención, esta persona no pertenece a la CH18, corte ${i+1} , posicion ${f+1}`);
//         }
//    } 
// }

//Rompemos la interacion con el primer "el bromas" que encontremos
// continua_buscando:                //esto debe esta pegado a l for // esta es una etiqueta
// for (let i = 0; i < generation.length; i++) {
//     for (let f = 0; f < generation[i].length; f++) {
//          if(generation[i][f]==="El bromas"){
//              console.warn(`Atención, esta persona no pertenece a la CH18, corte ${i+1} , posicion ${f+1}`);
//              break continua_buscando; // Recuerda que con el break se rompe el ciclo y se sale del for.
//          }
//          console.log(`Númerro de interacion ${i}-${f}`)
//     } 
//  }

//**********************Ciclo While************************ */

console.log("############ Ciclo While ############");

/**
 * Sintaxis:
 *      While (condicion){
 *          intruccion;
 *       }
 */
//Encontrar un numero que pense, del 1 al 10;
//let findNumber=true;
let number=1;
// while( findNumber){
//     if(confirm(`el número es ${number}?`)) findNumber=false;  //devuelve un true o false // si es false aumenta el numero y vuelve a preguntar // si es true solo sale del while 
//     number++;
// }
//Marcando el limite a 1 al 10
// while( findNumber){
//     if(confirm(`el número es ${number}?`)) {
//         findNumber=false;  //devuelve un true o false // si es false aumenta el numero y vuelve a preguntar // si es true solo sale del while 
//         alert(`Fantastico, tu numero es el ${number}`)
//     }
//     else if(number>=10){
//         findNumber=false; 
//         alert(`Humano , ya vete no sabes jugar`);
//     }
//     number++;
// }

// while(!confirm(`¿El numero es ${number}`)){
//     number++;
//     if(number>10) {
//         alert(`Humano, ya vete no sabes jugar`);
//         break;
//     }
// }
// alert(`Fantastico, tu numero es el ${number}`);

//************************************************ */

/**
 * Sintaxis do-while
 * do{
 * 
 * }while (condicion);
 * 
 * Primero empezamos con pedir perdor que pedir permiso
 * 
 * Recuerda que son ciclos, no condicionales
 * Se pregunta primero y despues se evalua
 */

//  console.log("############ Ciclo Do While ############");
// let bandera=false;

// while(bandera){
//     console.log("Mensaje dentro del ciclo while")
// }
//------------
//Muchas instruciones
//------------
// let contador=1;
// do{
//     console.log("Mensaje dentro del di-while")
//     contador ++;
// } while(contador<1);   //>1 si se imprimre  pero muchas mcuhas veces

// //¿Cuantas veces se imprime el mensaje? o ¿no se imprime? R:

let contador=0;
do{
    console.log("Mensaje dentro del do-while")
} while(++contador<10);   //>1 si se imprimre  pero muchas mcuhas veces

//¿Cuantas veces se imprime? R:10 veces

contador=3;

while(contador++<10){
    console.log("Valor de contador: " + contador);
}
console.log("valor final de contador=" +contador);
//¿Cuantas veces se imprime en consola y cual es el valor final de contador? R:7 y 11
//Con pre inclemnto ++incremento R:6 y 10

