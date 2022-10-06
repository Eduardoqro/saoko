console.log("Sesion JS08 OOP");


const miArreglo =[5,7,3,2]; // Realizar un arreglo
const miArregloCosntructor = new Array(5,7,3,2); // Realizar un arreglo con new Array // de esta forma vamos a trabajar 

console.log(miArreglo);
console.log(miArregloCosntructor);

/**Propeidades de mi arreglo con lenght*/ 
console.log(miArreglo.length);
console.log(miArregloCosntructor.length);

/**Metodo del arreglo con sort */
console.log(miArreglo.sort());
console.log(miArregloCosntructor.sort());

//==============================================

let coraline ={ //las clases van entre llaves//Recuerda que es un objeto
    //atributos
    nombre:"Coraline y la puerta secreta", // come siguente dato dentro del objeto
    duracion: 100,
    genero: ["Animacion","Misterio","Fantasia"],
    clasificacion: "B15",
    //Acciones
    actores: [ // es un arreglo de objetos //[{nombre: , pais: },{}]
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },
        {
            nombre: "Jennifer Saunders",
            pais: "USA"
        },
        {
            nombre:  "Dakota Fanning",
            pais: "USA"
        }
    ],
    directores:{ //Esto es un objeto
        nombre: "Hery Selik",
        pais: "USA"
    },
    //Con este metodo podemos imprimir todos los actores
    // mostrarActores:()=>{
    //     coraline.actores.forEach( (info)=>
    //         console.log(`Actor: ${info.nombre} del pais ${info.pais}`)
    //     );
    // }
    mostrarActores:function (){ // Con una funcion anonima(no tenemos nombre) si sepuede con this. 
        //Con this nos podemos traer todo ( objetos y atributos) // La palabra reservada this hace referencia al objeto que lo invoque //Con this. no se pueden utilizar con una funcion frecha
        this.actores.forEach(info=>{
            console.log(`${info.nombre} del pais ${info.pais}`)
        });
    },
    /**
     * Mostrar todos los datos de la pelicula con un metodo 
     */
    // mostrarTodaInfo:function(){ //Ejemplo una parte
    //     //Mostrar el resto de informacion
    //     this.mostrarActores(); // llamamos esta funcion para reutilizar el codigo de mostrar Actores();
    // }
    mostrarTodaInfo: function(){
        console.log("================");
        console.log(this.nombre);
        console.log(this.duracion);
        this.genero.forEach( (info) =>{
          console.log(`Genero: ${info}`);
        });
        console.log(this.clasificacion);
        console.log('actores' );
        this.mostrarActores();
        console.log(`director: ${this.directores.nombre} del pais ${this.directores.pais}` );
        console.log("================");
      }
};
//Accediendo al nombre:
console.log("Peliculas: "+coraline.nombre);
console.log("Eres arreglo?"+Array.isArray(coraline.actores))
// console.log("Actores: "+coraline.actores);
coraline.actores.forEach( info=>{ //Haci interamos en vemos cada elemento
    console.log(`Actor: ${info.nombre} del pais ${info.pais}`)
}
)
//Mostrando el director
console.log("directores: "+coraline.directores.nombre);
//Cambieando la clasificacion:
coraline.clasificacion="C";
console.log("Nueva Clasificación: " +coraline.clasificacion);
//Agregando al Actor : Ian McShane de UK, Daw Frech de UK.
//Iteramos los actores:
coraline.actores.push({nombre:"Ian McShane", pais:"UK"});
coraline.actores.push({nombre:"Daw Frech", pais:"UK"});
// coraline.mostrarActores(); // con el metodo
coraline.mostrarTodaInfo();




