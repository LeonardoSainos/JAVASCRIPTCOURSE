let n= 0;

//n=parseInt(n);
while(n <=10)
{ 
    
    document.write(n +'<br>');
    n++; 
    
}

document.write("<br><br><br><br><br><br><br>");


for(let i =0; i<=10; i++)
{
    if(i==5){
        continue;
        //continue se va a saltar el 5
        //en bd ejemplo si agregamos usuarios y si dice puta no lo agrega 
    }
    document.write(i+ "<br>");
}


document.write("<hr>");
let animales =['coffe','loky','luneta','micha','michi','deisy','toby','jeiko','Stimpy'];



for (animal in animales ){
 document.write(animal + "<br>");
 // in devuelve la posicion
 //animales[animal]
}
document.write("<br><br>");
for (animal of animales){
// of devuelve el valor 
    document.write(animal + "<br>");
}


document.write("<br><hr>");

array1=["A","B","C"];
array2=["D","E",array1,"Extra"];

//forRancio es la sentencia label, es el nombre del ciclo
forRancio:
for(let copia in array2)
{
    if(copia==2)//posicions
    {
        for(let copia of array1)
        {
            document.write(copia + "<br>");
            break forRancio;
            //continue forRancio
        }
    }
   
    else{
        document.write(array2[copia] + "<br>");
    }
}
