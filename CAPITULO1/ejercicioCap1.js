
Cofla = prompt("Cuanto dinero tienes?");
//Roberto = prompt("Cuanto dinero tienes?");
//Pedro = prompt("Cuanto dinero tienes?");


Cofla= parseInt(Cofla);
if(Cofla >= 0.6 && Cofla<1)
{

    alert('Cofla Compra el helado de agua y tu cambio es ' + (Cofla - 0.6)) ;

}

else if(Cofla >= 1 && Cofla<1.6)
{

     alert('Cofla Compra el helado de crema y tu cambio es ' + (Cofla - 1));

}
else if(Cofla >= 1.6 && Cofla<1.7)
{

     alert('Cofla Compra el helado de heladix y tu cambio es ' + (Cofla - 1.6));

}
else if(Cofla >= 1.7 && Cofla<1.8)
{

     alert('Cofla Compra el helado de heladovich y tu cambio es ' + (Cofla - 1.7));

}
else if(Cofla >= 1.8 && Cofla<2.9)
{

     alert('Cofla ompra el helado de helardo y tu cambio es ' + (Cofla - 1.8));

}
else if(Cofla >= 1.8 && Cofla<2.9)
{

     alert('Compra el helado de helardo y tu cambio es ' + (Cofla - 1.8));

}
else if(Cofla >=2.9)
{

     alert('Cofla Compra el helado de confites o el pote de 1/4kg tu cambio es ' + (Cofla - 2.9) );

}

else
{

     alert("No te alcanza Cofla pobre");
}