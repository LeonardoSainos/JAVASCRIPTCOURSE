let materias = {
    Fisica:[90,6,4,"Fisica"],
    Matematicas:[84,8,2,"Matematicas"],
    Español:[72,9,3,"Español"],
    Programacion:[100,10,4,"Programación"],
    BD:[60,8,1,"BD"],
}


const asistencia= () =>{

    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);
        if(asistencias>=90)
        {
           // console.log(materias[materia][3]);
        console.log("%c   Aprobado","color:green");
        }
        else{
           // console.log(materias[materia][3]);
            console.log("%c   Reprobado","color:red");
        }
        if(promedio>=7){
            console.log("%c  Promedio acreditado","color:green");
        }
        else{
            console.log("%c  Promedio bajo","color:red");
        }
        if(trabajos>=3){
            console.log("%c  Trabajos suficientes","color:green");
        }
        else{
            console.log("%c  Trabajos insuficientes","color:red");
        }

    }
}


asistencia();