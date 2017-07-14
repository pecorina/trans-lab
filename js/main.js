/* Holiii acá va tu código también */
/*	validador de mail 
/*contraseña debe ser de 8 caracteres y aceptar solo numeros*/
/*se debe corroborar q el mail tenga un formato valido*/

$(document).ready(function(){
	/*validar email y clave*/
	$("#botoncito").click(function(e){

		function mailito(email) {
          var run = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
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
	$("#verSaldo").on("click", function(){
		// una vez echo click busca//
		var saldoFinal = $("#numer").val();//div guardar saldo del imput
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + saldoFinal, 
            //busca el numero de la trajeta ingreesada
            type: 'GET',//GET TRAE EL ID DEL NUMERO DE TARJETA
            datatype: 'JSON',//FORMATO/CHORIZILLO DE LOS DATOS DE LOS NUMEROS DE TARJETAS BIPS
            
        })
      
        .done(function(response){//RESPUESTA RESPONSE
             //div vacio//
        $("#solito").append("<div>"+ response.saldoTarjeta + "</div>")
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
/* echo en javascript puro, se pasa a jquery
 
//Establezca el ancho de la navegación lateral a 250px y el margen izquierdo del contenido de la página a 250px

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

//Establezca el ancho de la navegación lateral a 0 y el margen izquierdo del contenido de la página a 0

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
*/

$('#abrirNav').click(function(){
	$('#mySidenav').width('250px');
});
$('#closeNav').click(function(){
	$('#mySidenav').width('0');
});