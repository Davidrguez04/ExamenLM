/**
 * Funcion para guardar los registros y ver que la contraseñas coinciden
 */
function operacionRegistro(form){
	let contraseña = document.getElementsByName('tuContraseña')[0].value;
	let contraseña2 = document.getElementsByName('tuContraseña2')[0].value;
	 let nombre=document.getElementsByName('tuNombre')[0].value;
	 let apellidos=document.getElementsByName('tuApellidos')[0].value;
	 let pregunta=document.getElementsByName('Pregunta')[0].value;
	 let respuesta=document.getElementsByName('tuRespuesta')[0].value;
	 let email=document.getElementsByName('tuEmail')[0].value;
	    
	 /*Para ver si las contraseñas coinciden
	 */
	 if(contraseña != contraseña2){
	 	alert("Las contraseñas no coinciden");
	 	let contraseñaa=prompt("Vuelva a introducir la contraseña");
	 	let contraseña22=prompt("Repita la contraseña introducida correctamente");
	 	}
	 	
	 	
	 
 }