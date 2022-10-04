console.log("Sesion JS06 Formulario");

//const form=document.getElementById("registro");
const objForm = document.forms['registro']; //ambos hacen los mismos // pero esta forma hace referencia al formulario . forms y id 

                        //(evento,funcionCallBack)
objForm.addEventListener('submit', event =>{
    event.preventDefault(); // con esto ya no reinicio y borra los datos
    console.log("El evento a suscedido");
     let email= objForm.elements['inputEmail4'].value;
     console.log(email);
     let password= objForm.elements['inputPassword4'].value;
     console.log(password);
}); // con esto estamos configurando un evento, submit es al momento que la inf se va al servidor // con funcionCallBack pasamos la funcion sin los parentesis
