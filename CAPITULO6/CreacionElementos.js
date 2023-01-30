const crear= document.querySelector(".contenedor");

const fragmento = document.createDocumentFragment();//Sustituye la manera de crear directamente para no consumir muchos recursos


for(let i=0;i<20;i++){ //se pone todo adentro porque cada objeto es unico y no podremos agregarle algo dos veces 

    const item = document.createElement("LI");
item.innerHTML="Este es un item de la lista";
//const textodelItem = document.createTextNode("Este es un item de la lista");

//item.appendChild(textodelItem);

fragmento.appendChild(item); //Crea un hijo del elemento padre 



}
console.log(fragmento);


crear.appendChild(fragmento);//Aqui ya lo agregamos al elemento y ya se mostrara