let materias  ={ //primer elemento sera el profe
    DesarrolloWeb:["Osvaldo","Bruno","Marco","Samantha","Leo"],
    Admin:["Javier Nolasco","Kike","Samantha","Luis","Sebas"],
    Seguridad:["Conchita","Uriel","Samantha","Leo","Sebas"],
    Ingles:["Maria","Kike","Bruno","Luis","Leo"],
}


const inscribir = (alumno,materia)=>{
 personas = materias[materia];

 

 if(alumno.length>=20)//20
 {
     document.write("Lo siento "+ alumno + ", las clases de materia ya estan llenas");

 }
 else{
        personas.push(alumno);
        if(materia =="DesarrolloWeb"){

            materias  ={ //primer elemento sera el profe
                DesarrolloWeb:personas,
                Admin:materias['Admin'],
                Seguridad:materias['Seguridad'],
                Ingles:materias['Ingles']
            }
            
            
        }
        else if(materia== "Admin"){
            materias  ={ //primer elemento sera el profe
                DesarrolloWeb:['DesarrolloWeb'],
                Admin:personas,
                Seguridad:materias['Seguridad'],
                Ingles:materias['Ingles']
            }
            
        }

        else if(materia== "Seguridad"){
            materias  ={ //primer elemento sera el profe
                DesarrolloWeb:['DesarrolloWeb'],
                Admin:['Admin'],
                Seguridad:personas,
                Ingles:materias['Ingles']
            }
            
        }
        else if(materia== "Ingles"){
            materias  ={ //primer elemento sera el profe
                DesarrolloWeb:['DesarrolloWeb'],
                Admin:['Admin'],
                Seguridad:materias['Seguridad'],
                Ingles:personas
            }
            
        }
        document.write(` Felicidades ${alumno}  te haz inscrito a  ${materia} correctamente`);
 }

}

document.write(materias["Ingles"] + "<br>");
inscribir("Alondra","Ingles");

document.write("<br>" +materias["Ingles"] + "<br>");