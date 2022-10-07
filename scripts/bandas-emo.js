import { Banda } from "./bandas.js";
//Aqui vamos a aplicar la herencia // la herencia es unica //las clases hereradas tambien tienen constructor
class BandaEmo extends Banda{
    #nivelTristeza;
    constructor(nombre, nParticipantes, pais, nivelTristeza){ //nuevo atributo nivelTristeza
        super(nombre,nParticipantes,pais); //para mandar a llamar el constructor de nivel superior(el de bandas)
        this.#nivelTristeza=nivelTristeza;
    }

    imprimir(){
        return `${super.imprimir()} con nivel de tristeza de ${this.#nivelTristeza}`
    }
}
export{BandaEmo};