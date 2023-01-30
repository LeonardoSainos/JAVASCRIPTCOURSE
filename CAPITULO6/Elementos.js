const elemento= document.querySelector(".Elemento");


//elemento.innerText; //Nos muestra el html tal y como se le indica desde ahi (ya tampoco se usa )
//elemento.outerText;//No se usa mas s


let r= elemento.textContent; //Se usa///  Devuelve el texto de cualquier nodo incluyendo hidden 
alert(r);
let r2=elemento.innerHTML;//Se usa// Devuelve el contenido html de un elemento
alert(r2);
let r3 = elemento.outerHTML; //se usa//  Devuelve el codigo html completo del elemento
alert(r3);