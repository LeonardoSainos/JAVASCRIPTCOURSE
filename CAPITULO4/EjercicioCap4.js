class Calculadora{
    Suma(n,n2){
        return parseInt(n) + parseInt(n2);
    }

    Restar(n,n2){
        return parseInt(n) - parseInt(n2);
    }
    Multiplicar(n,n2){
        return parseInt(n) * parseInt(n2);
    } 
    Dividir(n,n2){
        return parseInt(n) / parseInt(n2);
    }
    Exponencial(n,ex){

        return n**ex;
    }
    RaizCuadrada(n){
        let numero = Math.sqrt(n);
        return numero;
    }
    RaizCubica(n){
        let numero = Math.cbrt(n);
        return numero;
    }
}

 Micalculadora = new Calculadora();

  
alert("Que operacion deseas realizar?");
let respuesta= prompt("1:Suma,2:Resta,3:Multiplicacion,4:Division,5:Exponente,6:Raiz Cuadrada,7:Raiz cubica");
if(respuesta==1)
{
    let n= prompt("Haz elegido suma, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
   alert("El resultado es " + Micalculadora.Suma(n,n2));    
}
else if(respuesta==2)
{
    let n= prompt("Haz elegido resta, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
    alert("El resultado es " + Micalculadora.Restar(n,n2));    
}
else if(respuesta==3)
{
    let n= prompt("Haz elegido multiplicacion, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
    alert("El resultado es " + Micalculadora.Multiplicar(n,n2));    
}
else if(respuesta==4)
{
    let n= prompt("Haz elegido division, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
    alert("El resultado es " + Micalculadora.Dividir(n,n2));    
}

else if(respuesta==5)
{
    let n= prompt("Numero a potenciar");
    let n2=prompt("Exponente");
    alert("El resultado es " + Micalculadora.Exponencial(n,n2));    
}
else if(respuesta==6)
{
    let n= prompt("Numero a sacar raiz ");
    alert("El resultado es " + Micalculadora.RaizCuadrada(n));    
}else if(respuesta==7)
{
    let n= prompt("Numero a raiz cubica");
  
    alert("El resultado es " + Micalculadora.RaizCubica(n));    
}
else{
    alert("Opcion no valida");
}




/////////////////////////////////////////////////
 