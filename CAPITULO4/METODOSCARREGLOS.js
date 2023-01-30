 let nombres = ["Leo","Alo","Vicky"];

 let resultado = nombres.pop(); //Muestra el ultimo y lo elimina 

 //document.write(resultado + "<br>");
//document.write(nombres);

 //////////////

 let a = ["Leo","Alo","Vicky"];

 let a2 = a.shift(); //Muestra el primero  y lo elimina 

 //document.write(a2 + "<br>");
 //document.write(a);

 ////

 let b= ["Leo","Alo","Vicky"];

 let b2 = b.push("Gloria"); //Agrega uno nuevo en el final del arreglo, se puede agregar mas de un elemento

 //document.write(b2 + "<br>"); // Nos devuelve el numero de indices actual 
 //document.write(b);


 let c = [1,2,3,4,5];
 let c2= c.reverse(); // invierte el orden de los array

// document.write(c2);

 ///////


 let d=[1,2,3,4,5,6];
 let d2 = d.unshift(44,765); //metodo opuesto al shift asi como push a pop
 //document.write(d);//si pongo d2 nos regresa el numero de posiciones


 ////////////
 
 let e=[11,67,46,34,52,29];
 let e2 = e.sort(); //ordena de forma diccionaria o numerica
 //document.write(e2);

 //////////

  
 let f=[1,2,3,4,5,6,7,8,9,10];
 let f2 = f.splice(1,4,"ROBERTO"); //Elimina desde la posicion que se indica y el otro parametro es la cantidad 
 //si le quiero remplazar los numeros borrados agrego como otro parametro
 //No es necesario borrar para agregar a Roberto
 //document.write(f);

 ///////////////


 let g= ["A","B","C","D","E"];
let g2= g.join(" - ");//Join crea cadena de texto nuevo pero entre el arreglo que le pasamos  como
//su nombre lo dice los une
//document.write(g2);

//////////////

let h= ["A","B","C","D","E"];
let h2= h.slice(0,2);//Nos muestra del parametro uno al parametro dos, -1 porque si le pongo por ejemplo 3 noo incluye a esa
//posicion
//slice(0,-1); o dejar el segundo parametro vacio

//document.write(h2);



//////


let i= ["Aa","Bb","C","Dd","E"]; 
//i.filter( i2 =>document.write(i2 + "<br>"));// Se puede hacer a una funcion flecha 
 //otra forma
 resultado = i.filter(numero => numero.length>1);

//document.write("<br>" + resultado);
//llama a la función callback sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales callback devuelve un valor
//filter recibe como parametro una funcion 

////////////////////

//filter y foreach son lo mismo 






