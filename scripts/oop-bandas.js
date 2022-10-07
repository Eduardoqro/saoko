//-para importar la clase o clases de bandas
import{Banda} from './bandas.js'  
import{BandaEmo} from './bandas-emo.js'

console.log("JS08 Un dia triste como todos los dias");

const elRecodo = new Banda("El recodo", 50, "México");  // con esto llamamos al metodo cosntructor 
console.log(elRecodo.imprimir() ) ;


const mS=new Banda("MS",200,"México");
console.log(mS.imprimir());

const pXNDX = new Banda("PXNDX",4,"México");
console.log(pXNDX.imprimir());
//------Verificar la fecha de creacion-------
console.log(`Fecha de creacion de ${elRecodo.nombre} fue el ${elRecodo.creacion}` );
console.log(`Fecha de creacion de ${pXNDX.nombre} fue el ${pXNDX.creacion}` );
// pXNDX.creacion="sepa tu"; // no se esta asignado a creacion, esta creando nuevamente el atributo por eso se emprime
// console.log(`Fecha de creacion de ${pXNDX.nombre} fue el ${pXNDX.creacion}` );

//el encapsulado consiste en proteger los datos (atributos y metodos) internos de nuestro objeto y solo dar acceso a cierto tipo de datos

//La atraccion va de la mano con encapsulado 

elRecodo.nParticipantes +=1;
console.log(elRecodo.imprimir());

//Intanciar una banda Emo // de general a lo particular

const paramore = new BandaEmo("Paramore",3,"USA",3.5);
console.log(paramore.imprimir())//Se hereda el metodo imprimir()
// 


///////////Usando polimorfismo--->
muestraDatos(elRecodo);
muestraDatos(paramore);
muestraDatos("La banda me dice que todo lo que hago esta mal");
function muestraDatos(objBanda){
    let esTipoBanda=objBanda instanceof Banda;
    console.log("El dato es del tipo (o heredado): "+esTipoBanda);
    if(esTipoBanda){
    console.log("====Atencion, toquin de ====")
    console.log(objBanda.imprimir()); // el de recodo no muetra nivel de tristesa pero paramore si 
    console.log("===No te pierdas ===")
    }
}