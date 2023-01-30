//ORGANIZAR DIAS POR 14 DIAS 

let trabajo="240 minutos trabajo";
let estudio="100 minutos estudio";
let tp="100 minutos trabajos practicos";
let house = "30 minutos quehacer de casa";
let descanso="10 minutos descanso";


console.log("Tareas");

for(var i=0; i<14; i++){
    
    if(i==0){

        console.group("Semana1");
    }
    console.groupCollapsed("Día" + (i+1));
    console.log(trabajo);
    console.log(estudio);
    console.log(descanso);
    console.log(tp);
    console.log(house);
    if(i==7)
    {
        console.groupEnd();
        console.groupCollapsed("Semana2");
        
        
    }

}
console.groupEnd();
console.groupEnd();
