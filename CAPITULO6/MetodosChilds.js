const crear= document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML="Parrafo";
const h2_nuevo= document.createElement("H2");
h2_nuevo.innerHTML="Titulo nuevo";

const h2_antiguo= document.querySelector(".h2");

crear.replaceChild(h2_nuevo,h2_antiguo); //remplaza los valores del h2 como se indica 



//crear.removeChild(h2_antiguo); //elimina elementos de un contenedor 

let respuesta = crear.hasChildNodes(); //Verifica si el elemento tiene hijos , texto es ub hijo

if(respuesta){
    document.write("El elemento si tiene hijos");

}else{

    document.write(`El elemento no tiene hijos`);
}


//////////////////////////////////////////
//PROPIEDADES DE PADRES//

console.log( h2_nuevo.parentElement);//Busca una etiqueta html padre  y en este caso nos debe regresar un div

console.log(h2_nuevo.parentNode);//Busca un nodo padre

//PROPIEDADES HERMANOS // 

console.log(h2_nuevo.nextSibling);// son las etiquetas que tenemos en este caso h2,p,y h4 esta propiedad arroja al siguiente pero contando espacios 
console.log(h2_nuevo.previousElementSibling);//elemento que viene antes
console.log(h2_nuevo.nextElementSibling);//elemento que viene despues 
console.log(h2_nuevo.previousSibling); //contrario a nextSibling igual contando espacios


//OTROS

console.log(crear.closest(".div2"));//Toma el contenedor mas cercano de forma acendente