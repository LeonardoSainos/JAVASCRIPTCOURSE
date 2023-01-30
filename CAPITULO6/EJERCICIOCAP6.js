const contenedor= document.querySelector(".flex-container");
/*
const boton= document.querySelector(".comprar");
let valorAntiguo= boton.value;

boton.value= valorAntiguo.toUpperCase();*/

function crearllave(nombre,modelo,precio){
    img = "<img src='llave.png'>";
    nombre= `<h2> ${nombre} </h2>`;
    modelo= `<h3> ${modelo} </h3>`;
    precio= `<p> ${precio} </p>`;
     return  [img,nombre,modelo,precio];
}


//const llave = crearLLave("Llave1","ModeloX","33");


const changeHidden = (number)=>{
   document.querySelector(".key-data").value= number;
}
 let documentFragment = document.createDocumentFragment();
 for(var i=1;i<=20;i++){
 
    let Modelorandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave= crearllave(`llave ${i}`,`modelo ${Modelorandom}`,precioRandom);
    let div= document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(Modelorandom)});
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`);    
    
    div.innerHTML=llave[0] + llave[1] + llave[2] + llave[3];//se puede reemplazar por lo siguiente ...llave
   
    documentFragment.appendChild(div);

 }


contenedor.appendChild(documentFragment);