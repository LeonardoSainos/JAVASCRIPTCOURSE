const input = document.querySelector(".input-normal");

document.write(input.className + "<br>"); //class name nos regresa el nombre de la clase que esta en el input html
document.write(input.value); // value nos trae el valor directo

input.type = "text"; //Nos modifica el tipo de input directamente

input.accept= "image/gif" //Esto es para que acepte solo un formato de algo por ejemplo input file 

//form (Leonardo revisa el html <-)

input.minLength=4;
input.setAttribute("minLength","50");

input.placeholder="HOLA PETER";
input.required=" ";