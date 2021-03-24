// Agregar una funcionalidad de acción
$('.btn').click(function () {
    // do something
    alert('Has tocado un botón.')

});

// Agregar una funcionalidad y estilos
var control = false;
$('.btnColor').click(function () {

    if (!control) {
        $('.informacion').css('background', '#e7f3fe');
    } else {
        $('.informacion').css('background', '#F78181');
    }

    control = !control;
});


// Modificar el estilo de una clase css dinamicamente
$('.informacion').css('background', '#F78181').height(80);

// Obtengo información de uno o varios objeto/s DOM
// Getters and setters
var currentHeight = $('.informacion').height(), currentColor = $('.informacion').css('color');


// Limitar el alcance o CONTEXTO de un objeto DOM dentro de otro
var $articulo = $('article'), $articuloParrafo = $('.parrafo', $articulo);

// Moficio uno los P que esten dentro de las etiquetas ARTICLE
$articuloParrafo.css('background', '#688A08');
$articuloParrafo.css('color', '#F1F8E0');
