let cadena="String de prueba";

resultado = cadena.concat(" Hola"," 2");

//document.write(resultado); //concat une una o mas cadenas 
//////////////////////////////////////

let start="startwith";
let start2="startwith";
start2= start.startsWith(start2);//startwith se encarga de verificar que la cadena empiece igual que la que se compara
//document.write(start2);
//////////////////////////////////////

let end="cadena de prueba";
let end2="prueba";
end2= end.endsWith(end2);//startwith se encarga de verificar que la cadena termine igual que la que se compara

//document.write(end2);
//////////////////////////////////////


let i="cadena de prueba";
let i2="prueba";
i2= i.includes(i2);//busca la cadena sin importar la posicion
//document.write(i2);

//////////////////////////////////////



let a="Leo eres un imbecil estupido";
let a2="";
a2= a.indexOf("estupido");//Devuelve la posicion donde  comienza la cadena buscada 
//si no la encuentra da -1
//document.write(a2);

//////////////////////////////////////

let b="Leo eres un imbecil estupido estupido estupido";
let b2="";
b2= b.lastIndexOf("estupido");//Devuelve la posicion donde esta por ultina vez lo q se busca
//document.write(b2);

/////////////////////////////////


let c="ABC";
let c2="";
c2= c.padStart(100,"no importa el tamaño de la cadena  ");//Este metodo nos rellena la cadena por el numero que se indique y la cadena desde el inicio por eso su nombre start 
//document.write(c2);
/////////////////////////


let d="ABC";
let d2="";
d2= d.padEnd(30,"zyx");//Este metodo nos rellena la cadena por el numero que se indique y la cadena desde el final por eso su nombre end 
//document.write(d2);



let e="123 ";
let e2="";
e2= e.repeat(6);// repite la cadena las veces que se indique
//document.write(e2);