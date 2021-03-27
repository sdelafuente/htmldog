//eventos de productos y suma de carrito
$("#nombre").keypress( function(evento) {
    if (evento.keyCode > 47 && evento.keyCode < 58) {
        return false;
    }
});

$("#apellido").keypress( function(evento) {
    if (evento.keyCode > 47 && evento.keyCode < 58) {
        return false;
    }
});

$("#tel").keypress( function(evento) {
    if (evento.keyCode < 48 || evento.keyCode > 58) {
        return false;
    }
});

//
// $("#btnLogo").click( function() {
// 	console.log(logo.precio)
// 	let precio = logo.precio
//
// 	carrito.sumarPrecio(precio)
// 	carrito.agregarProducto(logo)
//
// 	console.log(carrito)
//
// });
//
// $("#btnBranding").click( function() {
// 	console.log(branding.precio)
// 	let precio = branding.precio
//
//
// 	carrito.sumarPrecio(precio)
// 	carrito.agregarProducto(branding)
//
// 	console.log( "$" + carrito.precio)
//
// });
//
// $("#btnContenido").click( function() {
// 	console.log(contenido.precio)
// 	let precio = contenido.precio
//
// 	carrito.sumarPrecio(precio)
// 	carrito.agregarProducto(contenido)
//
// 	console.log( "$" + carrito.precio)
//
// });
//
//
// $("#btnProducto").click( function() {
// 	console.log(producto.precio)
// 	let precio = producto.precio
//
//
// 	carrito.sumarPrecio(precio)
// 	carrito.agregarProducto(producto)
//
// 	console.log( "$" + carrito.precio)
// });
//
//
//
//
// $("#btnLanding").click( function() {
// 	console.log(landing.precio)
// 	let precio = landing.precio
//
//
// 	carrito.sumarPrecio(precio)
// 	carrito.agregarProducto(landing)
//
// 	console.log( "$" + carrito.precio)
//
// });
//
//
//
// $("#btnTienda").click( function() {
// 	console.log(tienda.precio)
// 	let precio = tienda.precio
//
//
// 	carrito.sumarPrecio(precio)
// 	carrito.agregarProducto(tienda)
//
// 	console.log( "$" + carrito.precio)
//
// });



//formulario de cliente (cambio jquery)


$("#enviar").click( function() {
	guardarUsuario()
});

function guardarUsuario() {
	var nombre = document.getElementById("nombre").value
	var apellido = document.getElementById("apellido").value
	var mail = document.getElementById("mail").value
	var tel = document.getElementById("tel").value
	var marca = document.getElementById("marca").value
	var redes = document.getElementById("redes").value
	var redes2 = document.getElementById("redes2").value
	var redes3 = document.getElementById("redes3").value


	var jsonUsuario = {
		"nombre" : nombre,
		"apellido" : apellido,
		"mail" : mail,
		"tel" : tel,
		"marca" : marca,

	}

	localStorage.setItem(jsonUsuario.nombre, apellido, mail, tel, marca)
}
