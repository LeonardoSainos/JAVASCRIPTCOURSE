let frutas =["uva","manzana","platano",5,9,8];

document.write(frutas);
console.log(frutas[0]);


//asociativos

let celular ={
    nombre :"Samsung a72",
    procesador : "Snapdragon 720",
    ram : "8gb",
    espacio : "128gb"
}
// lo anterior es lo mismo a lo siguiente pero de diferente manera 

let celular2=["Samsung a72","Snapdragon 720", "8gb","128gb"];


let ram =celular2[2];

let nombre =celular["nombre"];

let frase = `<br> El nombre de mi cel es <b> ${nombre} </b><br> y tiene <b> ${ram} </b>de ram`;

document.write(frase);


