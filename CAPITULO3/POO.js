class animal{

    constructor(edad,color,especie){
        this.edad= edad;
        this.color=color;
        this.especie=especie;
        this.info= `soy ${this.especie}, tengo ${this.edad} años y soy color ${this.color}`;
    }
    //metodos no se pueden con operador flecha
     ImprimirInfo()
     {
        document.write(this.info + "<br><br>");
    }
    Hablar(tipo)
    {
        document.write("Hola estoy " + tipo +"<br>");
    }
}
//No se puede tener un objeto con el mismo nombre de la clase
class vaca extends animal
{

    constructor(edad,color,especie,marca)
    { //No es necesario heredar todos los atributos
        super(edad,color,especie,marca);
        this.marca=marca;
    }

    SacarLeche()
    {
        alert("Leche de a litro");
    }

    static comer(){
        alert("Estoy comiendo xd");
    }
/*
    modificarRaza(){
        this.especie="Vaxa negra";
    }*/
    set setRaza(newName){
        this.especie="Vaca negra";
    }
    get getEspecie(){
        return this.especie;
        }
}

let vacota = new vaca(10,"blanca","vaca","lala");
let  perro = new animal(2,"negra","perro");
let  gato = new animal(2,"gris","gato");
let  pajaro = new animal(2,"verde","australiano");

console.log(perro);
   /*
vacota.SacarLeche();
vacota.comer();
*/


vacota.setRaza ="Vaca manchada";
alert(vacota.getEspecie);