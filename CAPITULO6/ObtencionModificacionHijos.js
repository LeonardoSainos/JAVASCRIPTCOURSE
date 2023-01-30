const crear= document.querySelector(".contenedor");

const hijo1= crear.firstChild;

const hijo1espacios= crear.firstElementChild; //Nos sirve para evitar poner junto todo sin espacios

console.log(hijo1);//da resultado de text
console.log(hijo1espacios);//En pantalla ya es un elemento html

const Hijos= crear.childNodes;//Devuelve todos los hijos se pueden imprimir todos o por numeros, pero no es un array 
console.log(Hijos);

const childreeens = crear.children; // Nos regresa solo las etiquetas html
console.log(childreeens); // A diferencia de hijos  No se puede recorrer con foreach, se puede con un for in o for of 