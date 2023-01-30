let parrafo = document.getElementById("parrafo");
//document.write(parrafo + "<br>");
let etiqueta = document.getElementsByTagName("p"); //NO ES ARRAY
//document.write(etiqueta + "<br>");
let selector = document.querySelector(".contenedor"); //seleccionar por clase o id . #
//document.write(selector + "<br>");
let todo = document.querySelectorAll("#parrafo"); //NODE LIST NO ES ARRAY



 
//Metodos para definir , obtener y eliminar valores de atributos
const rango = document.querySelector(".range");
        rango.setAttribute("type","color"); // otra forma seria ("type","rancio") y rancio sera su atributo
            //set cambia el valor 
            //removeAttribute nos borra el atributo
        valorAtributo = rango.getAttribute("type");// nos saca el valor dle atrubuto 
      //  valorAtributo = rango.removeAttribute("type");
          document.write("<br> este es el valor del atributo con get : " + valorAtributo);




 ///
 
 const titulo = document.querySelector(".titulo");

// titulo.setAttribute("contentEditable","true"); // nos sirve para EDITAR el html, el usuario lo edita


//titulo.setAttribute("dir","rtl"); //left to right, right to left . Nos sirve para la posicion de la etiqueta 

//titulo.removeAttribute("hidden"); // puede recibir un segundo parametro ya sea true o false
//titulo.setAttribute("tabindex","1"); // para probarlo se hace con la tecla tab y el numero indica la jerarquia para el recorrido 



titulo.setAttribute("title","Nuevo titulo"); //Nos sirve para cambiar el titulo de la etiqueta seleccionada