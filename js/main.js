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

//index 6//
$(document).ready(function(){
	$("#calculo-saldo").on("click", function(){
		var saldoFinal = $("#guardar-saldo").val();//div guardar saldo del imput
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + saldoFinal, 
            type: 'GET',
            datatype: 'JSON',
            
        })

        .done(function(response){
             //div vacio//
        $("#resultado-saldo").append("<div>"+ response.saldoTarjeta + "</div>")
            console.log(response.saldoTarjeta);
        })

        .fail(function(error){
            console.log("error");
        })
    });
	})


/*hamburguesa ñami que no resulto
$(document).ready(function(){
	$("#open-hide").click(function(){
		$(this).toggleClass("show");
	});
});
*/

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}