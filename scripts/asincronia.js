console.log("JS07 Asincronia");

console.log("01-Primer instrucción");
// setTimeout(funcion Callback, tiempo_para ejecutar(ms)); alternatica Callback es la funcion flecha 
// setTimeout(()=>console.log("01.5 Holi Crayoli"),3000)  // funcion asincrona, es un delay basicamente 

// Es un proceso que se realiza aparte y cuando se cumple la condicion la ejecuta

const temporizador =(retardo, msj)=>{  //con un temporizador 
    setTimeout(()=>console.log(msj),retardo);
}

const intervalo=(tiempo, msj)=>{            // se va aparecer ese mensaje cada cierto tiempo // con un intervalo
    setInterval(()=>console.log(msj),tiempo)
}


// temporizador(5000,"02-Segundo instruccion");

// intervalo(2000, "Holi Creyoli");

console.log("03-Tercera instrucción");

//************************************************************************ */

//Api Fetc es un metodo asincrona.
 console.log("01-Antes de la solicitud fetch");
 function solicitudFetch(userToFind){   //fetch es la promesa y se conecta a la API donde se van a extraer los datos
fetch("https://reqres.i/api/users?delay=3")//por defaut es el metodo get// lo que responda lo envia al metodo .then()//puede se una funcion frecha o callback //esta direcion tiene retardo / fetch es una promesa
    .then(response=>response.json()) // se convierte a un formato json//response.json() esto es una promesa y nos da un retorno en forma de objeto//funcion fecha
    .then(conversion=>{ //converison va tener la respuesta de response 
        // console.log(conversion);
        // para sacar datos , de este caso de MIchael
        // console.log(conversion.data[0].firt_name);
        // console.log(conversion.data[0].email)
        let encontrado= conversion.data.find(
            (data) =>data.first_name===userToFind);
        console.log(encontrado);
        let objUser=document.getElementById("user-name");
        let objEmail=document.getElementById("user-email");
        objUser.value=encontrado.first_name;
        objEmail.value=encontrado.email;
        userLocalStorage(); 
        return "hola";
    }) 
    .then(msj=>console.log("Ejemplo: "+msj))
    .catch(err=>{ //el metodo catch cacha cualquier error de los .then y mi promesa
        //Procesando el error
        console.log(err)
    }); 
}

function leerUsuario(usuario){
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Usuario a buscar: " + usuario);
    if(user.time > Date.now()){
            leerLocalStorage(); // si exite ya el usuario ejecuta esto
    }else{
            solicitudFetch(usuario);
    }
    solicitudFetch(usuario);
}
// console.log("03-Despues de la solicitud fetch");

function userLocalStorage(){ //LocalStorage es para guardar cualquier tipo de dato // pagina ya no tarda en cargar los datos // se guardan de forma local(navegador) // no es siempre necesario //se puede recuperar y eliminar
    let objUser=document.getElementById("user-name");
    let objEmail=document.getElementById("user-email");
    let user={
        name: objUser.value,
        email: objEmail.value,
        time: Date.now()+60000 //leer el tiempo actual y sumarle 1 // es el tiempo de vida
    }
    //LocalStorage.setItem('clave','valor')
    localStorage.setItem("name", objUser.value); // de esta forma de guarda en indivual
    localStorage.setItem("email", objEmail.value);// de esta forma de guarda en indivual
    //Para convertir un objeto a JSON: JSON.string
    localStorage.setItem("user", JSON.stringify(user));//se guardan varios 
}

function leerLocalStorage(){
    const objUser=document.getElementById("user-name");
    const objEmail=document.getElementById("user-email");

    // convertir de JSON a objeto: Json.parse(texto);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    console.log(typeof(user));
    objUser.value=user.name;
    objEmail.value=user.email;

}


function miPromesa(){ //Aqui definimos la promesa
    //resolve, reject funcionan como un retorno, resolve devuelve si fue exitoso, reject devuelve si fallo
    let promesa= new Promise((resolve, reject)=>{
        const expresion= false; //Cualquier operacion--simula una variable con false se ejecuta eñ reject
        if (expresion) resolve("La promesa fue exitosa");
        else reject("La promesa no se resolvio");
    }); 

    promesa // Aqui consumimos la promesa
     .then(response=> console.log(response))
     .catch(err=> console.log(err))
     .finally(console.log("se termino de ejecutar la promesa")); // cual sea la respuesta se manda esta salida que ya termino la promesa
}

miPromesa();

let division =(a,b)=>{
    return new Promise((resolve, reject)=>{
        if(b!==0) resolve(a/b);
        else reject("No se puede realizar una division entre cero");
    });
}

// division(4,0)
//     .then(resultado=>console.log("Resultado Div= "+ resultado ))
//     .catch(error=>console.log("error en la division: "+error));
    
// division(4,2)
// .then(resultado=>console.log("Resultado Div= "+ resultado ))
// .catch(error=>console.log("error en la division: "+error));

//******************************************************************************** */
//Los bloques try y catch nos sirven para el manejo de errores  //para que no apareza como error debido al await y detenga el programa
// Con Async, await //Se va espera que la promesa sea resuelta y continua con la siguieten linea de codigo
async function operaciones(){
    try{  // es parecido .then
        const result1= await division(4,0); // con await necesitamos la palabra async / con await realiza la funcion en secuencias, es decir se resuelve este primero // es una funcion promesa// await funcionasincrona()
        console.log("EL resultado de la div entre 0 es:" +result1);
    }
    catch(error){ //es parecido a .catch
        console.log("No se puede ser la división: "+error)
    }
   try{
        const result2 = await division(4,2);// y despues este 
        console.log("El resultado de la div es: "+result2);
   }
   catch(error){
        console.log("No se puede ser la división: "+error)
   }   
}
operaciones();