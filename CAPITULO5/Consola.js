console.assert(5>6); //manda mensaje de error si la afirmacion es falsa

console.clear(); //limpia la consola

console.error("Che capo, qué hiciste?");//Muestra un mensaje de error 


console.info("Muy bien tu trabajo eh, pero eso ya no se usa mas");//Mensaje informativo y el de log es de depuración

console.log("Mensaje de depuración");

console.table([1,5,9,13,19,78]);//Toma un argumento obligatorio data; debe ser un array o un objeto y un parametro adicional:columns


console.warn("Vas bien, pero cuidado porque..."); //Mensaje de advertencia

console.dir([100,220,333,448,556,666,789,925,1094])//Despliega una lista interactiva sobre el objeto de Js especificado


//FUNCIONES DE CONTEO//

console.count(); ///Nos puede ayudar para ver cuantas veces se ejecuta una funcion pot ejemplo sumar

console.countReset()//reinicia el conteo de count


/////////////////   FUNCIONES DE AGRUPACIÓN


console.group("NombreGrupo"); //Nos ayuda a crear grupos en la consola, por ejemplo la vista del for cuando va anydado


console.groupEnd("Elimina el grupo"); //lo eliminado pasa al grupo de arriba


console.groupCollapsed(); //grupo cerrado es decir minimizado como cuando cerramos lineas de codigo


////////////Metodos de temporización 


console.time(); // lo tomo como un cronometro


console.timeLog(); //Nos muestra la cantidad de tiempo desde que comenzo a ejecutarse el metodo time



console.timeEnd()// Lo termina y nos muestra el total


console.log("%crancio","color:red;background:black;padding:20px;border:3px solid blue");