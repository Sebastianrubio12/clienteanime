
//1. BUSCAR URI
let URL ="http://localhost/apisura/public/ninjas";


//2.HACER PETICION
let peticion = {
    method: "GET",
}

//3. LLAMAR AL SERVIDOR

fetch(URL,peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(datos){
    console.log(datos); 
})


