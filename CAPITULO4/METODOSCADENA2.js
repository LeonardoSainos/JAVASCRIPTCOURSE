let f="Hola, como, estás";
let f2="";
f2= f.split(",");//divide la cadena como se indique y devuelve un array
/* Al imprimir elimina lo que esta como parametro
document.write(f2[2] + "<br>");
document.write(f2[0] + "<br>");
document.write(f2[1] + "<br");*/

//////////////////////

let g="ABCDEFG";
g2= g.substring(0,2);//Le dice desde dodne comenzar y ahi lo corta
//con el que empieza esta incluido el que termina no 
//document.write(g2);
//////////////////////

let h="LEONARDOSAINOS@GMAIL.com";
h2= h.toLowerCase(h);// Convierte a minusculaa
//document.write(h2);

/////

let i="buap";
i2= i.toUpperCase(i);// Convierte a mayuscula
//document.write(i2);


/////
let j=["Alo","Leo"]
j2= j.toString(j);// Convierte a STRING
//document.write(j2[0]);
//document.write(j2);


//////////
let k="   Sainos   ";
k2= k.trim();//HTML elimina los espacios al interpretarlos
//Pero si usamos la propiedad .lenght nos mostrara el espacio real, para eliminar espacios usamos
//metosdo
//document.write(k2);


///

let l="   Sainos  ";
l2= l.trimEnd();//Elimina los espacios del final
//document.write(l2 + " su longitud original es de " + l.length + " y su nueva longitud es de " + l2.length);
///


let m="    Sainos   ";
m2= m.trimStart();//Elimina los espacios del final
//document.write(m2 + " su longitud original es de " + m.length + " y su nueva longitud es de " + m2.length);
///



