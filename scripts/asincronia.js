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
 function solicitudFetch(userToFind){
fetch("https://reqres.in/api/users?delay=3")//por defaut es el metodo get// lo que responda lo envia al metodo .then()//puede se una funcion frecha o callback //esta direcion tiene retardo
    .then(response=>response.json()) // se convierte a un formato json//response.json() esto es una promesa
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

function userLocalStorage(){   //LocalStorage es para guardar cualquier tipo de dato
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