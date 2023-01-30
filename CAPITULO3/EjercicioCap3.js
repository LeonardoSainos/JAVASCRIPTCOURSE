class Celular {
    constructor(color,peso,pantalla,camara,ram){
        this.color=color;
        this.peso=peso;
        this.pantalla=pantalla;
        this.camara=camara;
        this.ram=ram;
        this.encendido=false;
    }

    Encender(){
        if(this.encendido==false)
        { 
            this.encendido=true;
            alert("Celular prendido");
        }
        else{
            alert("Celular apagado");
            this.encendido= false;
        }
    }

    Reiniciar(){
        if(this.encendido==true){
            alert("Reiniciando telefono");
        }
        else{
            alert("El celular esta apagado"); 
        }
    }
    TomarFoto(){
         alert("Tomando foto de resolucion camara");
    }
    TomarVideo(){
        alert("Tomando video en 4k");
    }
    mostrarInfo(){
            document.write(
            `color: <b> ${this.color}</b><br>
             peso: <b>${this.peso}</b><br>
             pantalla:<b>${this.pantalla}</b> <br>
             Camara:<b>${this.camara}</b> <br>
             RAM :<b> ${this.ram}</b> <br>
             
            `);
     }   
}

class GamaAlta extends Celular{

constructor(color,peso,pantalla,camara,ram,camaraExtra){
  super(color,peso,pantalla,camara,ram);
  this.camaraExtra= camaraExtra;
}

GrabarVideoLento(){
    alert("Estas grabanado en camara lenta");

    
}
ReconocimientoFacial(){
    alert("Esto es un reconocimiento facial");
}

InfoAltaGama(){
    return document.write(this.mostrarInfo() + ` <br> Resolucion camara extra ${this.camaraExtra} <hr> `);

}
}



MotorolaG60 = new Celular("Plateado","180gr","SuperAmoled","48MP","6GB");
Pocox3Pro= new Celular("Negro","200gr","Super TFT","64MP","8GB");
GalaxyA72= new Celular("Azul","200gr","Super Amoled","64mp UHD","6GB");
/*
MotorolaG60.Encender();
MotorolaG60.TomarFoto();
MotorolaG60.TomarVideo();
MotorolaG60.Reiniciar();*/

/*
document.write(
`${MotorolaG60.mostrarInfo()} <br>
 ${Pocox3Pro.mostrarInfo()} <br>
 ${GalaxyA72.mostrarInfo()}<br>`
);*/

Iphone13 = new GamaAlta("Negro","500gr","SuperAmoled","48mpx","12GB","fullHD");
SamsungS21FE = new GamaAlta("Verde","400gr","ips","64mpx","8GB","UHD");



Iphone13.InfoAltaGama();
     SamsungS21FE.InfoAltaGama();
        