let a = Math.sqrt(25); ///Saca raiz cuadrada

document.write(a + " raiz " + "<br>");
/////

let b = Math.cbrt(27); //Raiz cubica
document.write(b + " raiz cubica "+ "<br>");

//
let c = Math.max(4,1,6,12,63,245,90); //Devuelve al valor mas grande

document.write(c + " valor mas grande "+ "<br>");


// //
let d=  Math.min(4,1,6,12,63,245,90); //Devuelve al valor mas chico

document.write("<br>" +" valor mas chico "+ d);


//
let e= Math.random();// numero aleatorio entre 0 y 1

e=Math.random()*100;
e= Math.round(e); // Redondea al numero entero mas cercano es decir elimina el punto
//e=Math.floor(4.9);// redondea pero hacia abajo, es decir regresara 4
//Si queremos que no salga el 0 y si el 100 le ponemos en random 99 y en floor e +1///
document.write("<br> random y round " + e);


////



let f=Math.fround(9.759999999999999999999999999); //redondea al decimal proximo 4bits

document.write("<br> redondeo  por 4 bits " + f);


///////////


let g= Math.trunc(9.3);//borra el decimal

document.write("<br> redondea como calificacion de escuela " + g );

//////
//PROPIEDADES 
let h= Math.PI;
document.write("<br> PI " + h);


//////
let i= Math.SQRT1_2// Raiz cuadrada de un medio

document.write("<br> raiz cuadrada de un medio " + i);
/////////////////


let j =Math.SQRT2// raiz de 2
document.write("<br> raiz cuadrada de 2 " + j);
/////////////////



let K =Math.E// Logaritmo natural
document.write("<br> Logaritmo natural  " + K);
///////////////// 



let l =Math.LN2// Logaritmo natural DE 2
document.write("<br> Logaritmo natural de dos " + l);
///////////////// 






let m =Math.LOG2E// Logaritmo DE E CON BASE 2
document.write("<br> Logaritmo DE E CON BASE 2 " + m);
///////////////// 




let n =Math.LN10// Logaritmo DE E CON BASE 10
document.write("<br> Logaritmo DE E CON BASE 10 " + n);
///////////////// 






