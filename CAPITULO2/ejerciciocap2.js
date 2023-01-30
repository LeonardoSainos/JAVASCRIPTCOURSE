let free= false;

const Problema1 =(time)=>{

    let edad = prompt("Cual es tu edad?");
    if(edad >=18)
    {
        if(time>=2 && time<7 && free==false)
        {
            free= true;
            alert("Pueds pasar gratis porque eres la primer persona despues de las 2AM")
        }
        
        else{
                alert(`Son las ${time} hrs y Debes pagar la entrada antes de entrar`);
        }
    }
    else{
        alert("Eres menor de edad no puedes pasar");
    }
}

Problema1(23);
/*
Problema1(24);
Problema1(2);
Problema1(0.6);
Problema1(1);
Problema1(0.2);
Problema1(2.4);
Problema1(3);*/


//Problema 2


let cantidad = prompt("Cuantos alumnos hay?");
let totalAlu=[];
let i=0;


for(i;i<cantidad;i++) //Pide nombres de los alumnos 
{
    totalAlu[i]=[prompt("Nombre del alumno " + (i+1)),0];

}

const Asistencia = (nombre,p)=>{
    let presencia= prompt(nombre);

    if(presencia=="A" || presencia=="a")
    {
        totalAlu[p][1]++;
    }
}

for(i=0; i<30;i++)//cantidad de alumnos que se planeaba
{
    for(alumno in totalAlu)
    {
        Asistencia(totalAlu[alumno][0],alumno);
    }
}

for(alumno in totalAlu)
{
    let resultado = `${totalAlu[alumno][0]}: <br>
    ________Asistencias: ${totalAlu[alumno][1]}<br>
    _________Faltas: ${30 - parseInt(totalAlu[alumno][1])} <br>`  ;

        if(30 - totalAlu[alumno[1]]>18)
        {
            resultado+="<strong>REPROBADO POR FALTAS</strong>";
        }
        else{
            resultado+="<br><br>";
        }
        document.write(resultado);
}

    

//Problema 3
/*
const Sumar =(n,n2)=>{
return parseInt(n) + parseInt(n2);
}

const Restar =(n,n2)=>{
return parseInt(n) - parseInt(n2);
}

const Multiplicar =(n,n2)=>{
    return parseInt(n) * parseInt(n2);
}
    
const Dividir =(n,n2)=>{
  return parseInt(n) / parseInt(n2);    
}
        
alert("Que operacion deseas realizar");

respuesta= prompt("1:Suma,2:Resta,3:Multiplicacion,4:Division")

if(respuesta==1)
{

    let n= prompt("Haz elegido suma, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
   alert("El resultado es " + Sumar(n,n2));    
}
else if(respuesta==2)
{
    let n= prompt("Haz elegido resta, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
    alert("El resultado es " + Restar(n,n2));    
}
else if(respuesta==3)
{
    let n= prompt("Haz elegido multiplicacion, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
    alert("El resultado es " + Multiplicar(n,n2));    
}
else if(respuesta==4)
{
    let n= prompt("Haz elegido division, pon el primer numero");
    let n2=prompt("Introduce el segundo numero");
    alert("El resultado es " + Dividir(n,n2));    
}
else{
    alert("Opcion no valida");
}
*/