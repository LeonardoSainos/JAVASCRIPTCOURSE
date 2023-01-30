const Informacion= (materia)=>{
    materias  ={ //primer elemento sera el profe
        DesarrolloWeb:["Osvaldo","Bruno","Marco","Samantha","Leo"],
        Admin:["Javier Nolasco","Kike","Samantha","Luis","Sebas"],
        Seguridad:["Conchita","Uriel","Samantha","Leo","Sebas"],
        Ingles:["Maria","Kike","Bruno","Luis","Leo"],
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias]; // que devuelva un arreglo del arreglo, o mejor dicho el nombre que se le pasa por parametro al hacer
        // eso regresa los nombres y materia es el parametro
    }
    else{
        return materias;
    }
}
 const Mostrar = (materia)=>{
    let ver=Informacion(materia);
    if(ver!== false){
        let profe = Informacion(materia)[0][0];
      
        let alumnos = Informacion(materia)[0];
       
        alumnos.shift();
        document.write(`El profesor de <b> ${ver[1]}</b> es <b style="color:red">${profe}</b><br>
        Los alumnos son: <b style="color:green">${alumnos}</b><br><br>
        `);
    }
 }

  const cantidad = (alumno)=>{
    let total=0;
    let ver=Informacion();
    let presentes=[];
      for(info in ver)
      {
        if(ver[info].includes(alumno)){
            total ++;
            presentes.push(info + " ");
        }     
      }
      return `${alumno} está en ${total} materias y cursa las clases ${presentes} `;
  }


  Mostrar("DesarrolloWeb");
  Mostrar("Ingles");
  Mostrar("Seguridad");
  Mostrar("Admin");
document.write(cantidad("Leo"));
