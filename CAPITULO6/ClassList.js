const titulo = document.querySelector(".estilo");

titulo.classList.add("grande"); // sirve para agregar una nueva clase 

titulo.classList.remove("grande");//lo contrario al add lo elimina


let valor = titulo.classList.item(0); // devuelve el valor de la classe conforme viene en el html es como cuando regresa un arreglo;

        // document.write("<br>" + valor);// no altera el valor de las clases

let verifica = titulo.classList.contains("estilo");//verifica que la clase exista 

//document.write("<br>" + verifica)

  //toggle si no tiene la clase especificada la agrega y si ya la tiene la elimina 
titulo.classList.toggle("eliminaoagrega"); //hay un segundo parametro que es para forzar por ejemplo si existe y le pongo el segundo parametro true la dejara por mas que la quieres sacar
//el segundo parametro no lo soporta Internet explorer o Opera version 12

let remplaza= titulo.classList.replace("estilo","remplazada");
//document.write(remplaza);