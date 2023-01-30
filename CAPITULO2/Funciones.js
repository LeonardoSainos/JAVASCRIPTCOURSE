function Saludar()
{

    respuesta= prompt("Hola como fue tu dia ");
    if(respuesta=="bien")
    {
        alert("Me alegro");

      //  return finaliza la funcion es como un break
    }
    else{
        alert("Una pena");
    }
}


//let saludo = Saludar();
//document.write(saludo);


function suma(n,n2)
{
    let r= n+n2;

    return r;
}

s= suma(8,9);

document.write(s);



//otra forma de crear es 

// const sumalo = function sumar (){}


const FuncionFlecha = (n,s) =>{
     let frase = `Hola ${n} ${s} como estas?`;
     document.write(frase);
}
 //podemos quitar el parentesis de parametro, las llaves
 //el document.write en funciones flecha retorna automaticamente
  

FuncionFlecha("Alondra","De Sainos ");