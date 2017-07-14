/* Holiii acá va tu código también */
/*	validador de mail 
/*contraseña debe ser de 8 caracteres y aceptar solo numeros*/
/*se debe corroborar q el mail tenga un formato valido*/

$(document).ready(function(){
	/*validar email y clave*/
	$("#botoncito").click(function(e){
/*f(x)isEmail*/
		function mailito(email) {
/*regrex*/var run = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 		 return run.test(email);
		};

		if ($("#email").val() == "") {
			alert("ingresa tu email")
		}

		if (mailito($("#email").val()) == false ) {
			e.preventDefault();
			alert("tu email no es valido")
		
		}
		if ($("#contraseña").val().length != 8) {
			alert("tu clave debe ser de 8 digitos")
		}

		 else {
			e.preventDefault();
			window.location = "index2.html";
		}
	});
});

/*hamburguesa ñami que no resulto
$(document).ready(function(){
	$("#open-hide").click(function(){
		$(this).toggleClass("show");
	});
});
*/