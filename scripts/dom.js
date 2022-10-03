console.log("Sesion JS06 DOM")

// Sesion JS06 DOM 
// document.getElementById("titulo-h1");    Recuerda que documment accede a todo el documento y getElementByID a nues id de html
// <h1 id=​"titulo-h1">​JavaScript, HTML, DOM, JS06​</h1>​
// let dom= document.getElementById("titulo-h1);
// VM416:1 Uncaught SyntaxError: Invalid or unexpected token
// let dom= document.getElementById("titulo-h1");
// undefined
// dom.innerHTML;
'JavaScript, HTML, DOM, JS06' 
// esto ya es un atributo obtenido de nuetro Dom e id

//Se va modificar el archivo original con JS
// encontrarPorID();
// function encontrarPorID(){
//     //Obtenemos el objeto a través de su ID
//     const element = document.getElementById("titulo-h1");
//     console.log("Datos del elemento: "+element.innerHTML);

//     //cambiamos los datos en el objeto
//     element.innerHTML`El <em class="color-em">texto</em> en el título es: "${Element.innerHTML}`;

// }

// document.getElementsByTagName("h1"); Esto regresa una coleccion y  muestra por medio de la etiqueta seleccionado , el numero de veces que esta ese elemento y ubicar la etiqueta en sus diferentes posiciones.
// HTMLCollection [h1#titulo-h1, titulo-h1: h1#titulo-h1]   ó
// h1#titulo-h1
// titulo-h1
// : 
// h1#titulo-h1
// length
// : 
// 1
// [[Prototype]]
// : 
// HTMLCollection

// document.getElementsByTagName("p");
// HTMLCollection(2) [p#intro.intro, p#intro-d1.intro, intro: p#intro.intro, intro-d1: p#intro-d1.intro]
// 0
// : 
// p#intro.intro
// 1
// : 
// p#intro-d1.intro
// intro
// : 
// p#intro.intro
// intro-d1
// : 
// p#intro-d1.intro
// length
// : 
// 2
// [[Prototype]]
// : 
// HTMLCollection

// Ejemplo de modificacion del parrofo 2 por medio del lo anterior
// let parrafos =document.getElementsByTagName("p");
// undefined
// parrafos[1].innerHTML="Holi Crayoli";
// 'Holi Crayoli'

encontrarPorTagName();

function encontrarPorTagName(){
    //Obtenemos los objectos que cumplan con el tag indicado
    //getElementsByTagName() entrega una coleccion con los objetos encontrados
    let elements = document.getElementsByTagName("p");
    console.log("Elementos encotrados: "+elements.length);

    //Obtenemos el elemento del indice 1
    let parrafo = elements[1].innerHTML;
    console.log("Contenido en p[1]:" +parrafo); // nos entraga tambien una etiqueta hija y el texto //Contenido en p[1]:Probando las <strong class="color"> reacciones</strong> de Zoom
    console.log("Contenido en P[1] usando innerText: "+ elements[1].innerText); // nos estraga el puro texto, sin elementos anidaddos y sin dobles espacios // Contenido en P[1] usando innerText: Probando las reacciones de Zo
} 


//Accedemos por la clase
// document.getElementsByClassName('color')[0].innerHTML= "Reacciones Pro";
// 'Reacciones Pro'

encontrarPorClase();

 function encontrarPorClase(){
    const elements = document.getElementsByClassName("color");
    console.log("Elementos encotrados: "+ elements.length);
    elements[0].innerHTML="Reacciones Pro"
}

// document.querySelectorAll(".color");
// NodeList(2) [strong.color, strong.color]
// 0
// : 
// strong.color
// 1
// : 
// strong.color
// length
// : 
// 2
// [[Prototype]]
// : 
// NodeList

// document.querySelector("h3>.color"); //para obener una etiqueta especifica con la clase
// <em class=​"color">​ sueñito​</em>​

encontrarPorSelector();
function encontrarPorSelector(){
    const elements= document.querySelectorAll("h3>.color");
    console.log("Elementos encontrados: " +elements.length);
    elements[0].innerHTML="ganas de comprar";
}