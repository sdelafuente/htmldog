// alert('Hola Mundo!')

var apellido;
// var edad;

// apellido = prompt('Saludos, me dirias tu apellido?')
// edad = 37 //No es Recomendable hacer esto

// console.log(apellido);
// console.log(edad);

//------------- MATEMÁTICA
var manzanas = 5, peras = 10;
var cantidaDeFrutas = manzanas + peras;
var cantidadPorPersona = cantidaDeFrutas / 3;

var cuenta = (10 + 2) / 2 + 4 * 2;
// console.log(cuenta);

//------------ LOGICA
// console.log(123.456 === 123.456);
// console.log(123.456 === 123.457);
// console.log(123.456 !== 123456);
// console.log('123456' === 123456);
// console.log(3 > 10);
// // console.log(3.4 > 1.06);
// console.log(3.4 >= 3.4);

//------------- CONDICIONALES
if (3 < 4) {
    // console.log("IF");
}

if (10 < 5) {
    // console.log("if");
} else {
    // console.log("else");
}

// --------------- LOOPS
var i = 1;
while (i < 10) {
    // alert(i);
    // console.log(i);
    i = i + 1;
}

for (var i = 0; i <= 10; i++) {
    // alert(i);
    // console.log(i);
}

// -------- FUNCIONES
var sumar = function (a, b) {
    return a + b;
};

var resultado = sumar(16, 43);

// ------------- OBJETOS
var jedi = {
    nombre: "Yoda",
    edad: 899,
    hablar: function() {
        alert('El miedo es el camino hacia el Lado Oscuro. El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento.');
    }
}
// Invoco a la función hablar
// jedi.hablar();

// Modifico el objeto jedi
jedi.nombre     = 'Obi-wan Kenobi';
jedi.lightsaber = 'Blue';


// Creo el objeto persona
var persona = {
    edad: 37
};

// Agrego un objeto dentro de u atributo de otro objeto
persona.nombre = {
    primero: "Santiago",
    segundo: "Daniel"
};


var perro = {};
perro.ladrar = function() {
    alert('Guau!!');
};

// perro.ladrar();

// ------------ ARREGLOS
var arrayVacio = [];
var listaDeCompras = ['Leche', 'Fideos', 'Manteca', 'Huevos'];

// console.log(listaDeCompras[2]);
// console.log(listaDeCompras.length);
listaDeCompras.push('Jabón en polvo')
// console.log(listaDeCompras.length);

var helloFrom = function (personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

for (var i = 0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    // alert(greeting);
}
