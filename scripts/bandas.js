//Nombrar clases primero con mayusculas //La clase es el molde y nos describe los atributos y definir 
class Banda {
    //Atributos de la clase
    // no es necesario poner los atributos aqui, en java si va, en JS se definen en this
    // nombre;
    // nParticipantes;
    // pais;
    #nombre;
    #pais;
    #nParticipantes;
    #creacion; //para que no aparesca error cvon creacion
    constructor(nombre, nParticipantes, pais){ // va siempre con ese nombre // estos son parametros de la funcion constructor
        this.#nombre=nombre;
        this.#nParticipantes=nParticipantes;
        this.#pais=pais; //el parametro pais se le asigna al atributo pais 
        this.#creacion= new Date(); //recuenda new Date() para la fecha actual // con # encasulamos estre atributo solo se puede uitlizar aqui , afuera ya no

    }
    /**
     * Texto con los datos principales de la banda
     * @returns mensaje con datos principales
     */
    imprimir(){
        return`${this.#nombre} de ${this.#nParticipantes} integrantes, del país ${this.#pais}`
    }

    get creacion(){
        return this.#creacion;
    }

    get nParticipantes(){
        return this.#nParticipantes;
    }

    set nParticipantes(nuevoNumero){
        this.#nParticipantes =nuevoNumero;
    }

}

//para exportar las clases, siempre al final
export{Banda}; 